let questions = [];

const questionEl = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const questionWrapper = document.getElementById("question-wrapper");
const scoreDisplay = document.getElementById("score-display");
const backBtn = document.querySelector(".btn-home");
const nameBadge = document.getElementById("student-name-badge");
const bgToggle = document.getElementById("bg-toggle");
const themeToggle = document.getElementById("theme-toggle");
const _audioProbe = document.createElement("audio");
const _audioExt = _audioProbe && _audioProbe.canPlayType && _audioProbe.canPlayType("audio/wav") ? "wav" : "mp3";
const correctAudio = new Audio("../assets/sounds/correct." + _audioExt);
const incorrectAudio = new Audio("../assets/sounds/incorrect." + _audioExt);
const APP_VERSION = "1.1.3";
const versionEl = document.getElementById("app-version");
if (versionEl) versionEl.textContent = APP_VERSION;
const footerEl = document.querySelector(".app-footer");
const loaderEl = document.getElementById("loader-overlay");

function showLoader() {
    if (loaderEl) loaderEl.style.display = "flex";
}
function hideLoader() {
    if (loaderEl) loaderEl.style.display = "none";
}

let current = 0;
let score = 0;
let studentName = "";
let bgIndex = 1;

let selectedAnswer = null;
let answered = false;
let confirmEl = null;
let feedbackEl = null;
let nextBtn = null;
const SCORE_KEY = "g8-tle_scores";
const ADDED_STUDENTS_KEY = "added_students_g8-tle";
let optionButtons = [];
let nameInputEl = null;
let startBtnEl = null;
let confirmYesBtnEl = null;
let confirmNoBtnEl = null;

function clearTransient() {
    if (confirmEl && confirmEl.parentNode) confirmEl.parentNode.removeChild(confirmEl);
    if (feedbackEl && feedbackEl.parentNode) feedbackEl.parentNode.removeChild(feedbackEl);
    if (nextBtn && nextBtn.parentNode) nextBtn.parentNode.removeChild(nextBtn);
    confirmEl = null;
    feedbackEl = null;
    nextBtn = null;
}

/**
 * Normalizes a name string for reliable comparison.
 * - Trims leading/trailing whitespace.
 * - Replaces multiple internal spaces/tabs with a single space.
 * - Converts to lowercase.
 */
function normalizeName(name) {
    if (!name) return "";
    return name.trim()
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove accents/diacritics
        .replace(/[\u200B-\u200D\uFEFF]/g, "") // Remove hidden zero-width chars/BOM
        .replace(/[^a-z0-9\s]/g, "") // Remove any remaining special symbols/punctuation
        .replace(/\s+/g, " "); // Normalize internal whitespace to single space
}

function showNameForm() {
    questionEl.textContent = "Enter your name to start the 4th Quarter Grade 8 - TLE Examination";
    optionsContainer.innerHTML = "";
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Your full name";
    input.className = "name-input";
    const startBtn = document.createElement("button");
    startBtn.textContent = "Start";
    startBtn.style.marginTop = "10px";
    
    const enyeHint = document.createElement("small");
    enyeHint.innerHTML = "Tip: Press <b>Alt + N</b> for ñ or <b>Alt + Shift + N</b> for Ñ";
    enyeHint.style.display = "block";
    enyeHint.style.marginTop = "8px";
    enyeHint.style.color = "#666";

    optionsContainer.appendChild(input);
    optionsContainer.appendChild(startBtn);
    optionsContainer.appendChild(enyeHint);

    if (footerEl) footerEl.style.display = "block";
    nameInputEl = input;
    startBtnEl = startBtn;

    input.addEventListener("keydown", (e) => {
        // Alt + N shortcut for ñ/Ñ
        if (e.altKey && (e.key === "n" || e.key === "N")) {
            e.preventDefault();
            const char = e.shiftKey ? "Ñ" : "ñ";
            const start = input.selectionStart;
            const end = input.selectionEnd;
            const text = input.value;
            input.value = text.substring(0, start) + char + text.substring(end);
            input.selectionStart = input.selectionEnd = start + 1;
            return;
        }
        if (e.key === "Enter") {
            startBtn.click();
        }
    });
    startBtn.addEventListener("click", async () => {
        const val = (input.value || "").trim();
        if (!val) {
            input.style.borderColor = "#e74c3c";
            input.focus();
            return;
        }

        showLoader();
        try {
            console.log("Checking student list...");
            
            let text = "";
            // Priority 1: Global variable from students-list.js (Serverless fallback)
            if (window.STUDENTS_LIST_DATA) {
                console.log("Using local script data for student list.");
                text = window.STUDENTS_LIST_DATA;
            } else {
                // Priority 2: Fetch from server
                try {
                    const listUrl = "students-list.txt?nocache=" + Date.now();
                    const resp = await fetch(listUrl);
                    if (resp.ok) {
                        text = await resp.text();
                    }
                } catch (fetchErr) {
                    console.warn("Fetch failed, and no local script data found.");
                    throw new Error("Failed to fetch student list and no local data found. If running locally, please use start_server.bat or check students-list.js.");
                }
            }

            if (!text) {
                throw new Error("Student list data is empty or could not be loaded.");
            }
            
            // Remove BOM if present
            text = text.replace(/^\uFEFF/, "");

            // Parse and normalize names from the file
            const authorizedStudents = text.split(/\r?\n/)
                .map(s => s.trim())
                .filter(s => s.length > 0);
            
            console.log(`Loaded ${authorizedStudents.length} names from list.`);
            
            // Also check newly added students from admin panel (localStorage)
            let newlyAdded = [];
            try {
                const raw = localStorage.getItem(ADDED_STUDENTS_KEY);
                if (raw && raw !== "undefined") {
                    newlyAdded = JSON.parse(raw);
                }
                if (!Array.isArray(newlyAdded)) newlyAdded = [];
            } catch (jsonErr) {
                console.warn("localStorage students data corrupted, resetting to empty list.");
                newlyAdded = [];
            }
            
            const normalizedInput = normalizeName(val);
            let officialName = "";
            console.log(`Searching for input: "${val}" -> Normalized: "${normalizedInput}"`);

            // Search in authorized list
            for (let name of authorizedStudents) {
                const norm = normalizeName(name);
                if (norm === normalizedInput) {
                    officialName = name;
                    break;
                }
            }

            // Search in newly added list if not found yet
            if (!officialName) {
                console.log(`Checking ${newlyAdded.length} extra students...`);
                for (let name of newlyAdded) {
                    const norm = normalizeName(name);
                    if (norm === normalizedInput) {
                        officialName = name;
                        break;
                    }
                }
            }

            if (!officialName) {
                console.warn(`Student not found in list: "${normalizedInput}"`);
                alert("Unauthorized: Your name is not in the student list for this grade. Please check your spelling or contact your teacher.");
                hideLoader();
                input.style.borderColor = "#e74c3c";
                input.focus();
                return;
            }

            console.log(`Student found: "${officialName}"`);

            studentName = officialName; // Use the official capitalization from the list
            if (nameBadge) {
                nameBadge.textContent = studentName;
                nameBadge.style.display = "inline-block";
            }

            // Display student photo next to logo
            const logo = document.querySelector('.school-logo');
            if (logo) {
                let photo = document.getElementById('student-photo');
                if (!photo) {
                    photo = document.createElement('img');
                    photo.id = 'student-photo';
                    photo.className = 'student-photo';
                    photo.onerror = () => { photo.style.display = 'none'; }; // Hide if not found
                    logo.parentNode.insertBefore(photo, logo.nextSibling);
                }
                photo.src = `../assets/students-photo/${encodeURIComponent(studentName)}.jpg`;
                photo.style.display = 'inline-block';
            }

            score = 0;
            current = 0;
            nameInputEl = null;
            startBtnEl = null;
            console.log("Auth success. Loading questions...");
            await loadExternalQuestions();
            console.log("Questions loaded count:", questions.length);
            renderQuestion();
        } catch (e) {
            console.error("Auth check failed:", e);
            let userMsg = "Error verifying student list: " + e.message;
            if (e.message.includes("fetch")) {
                userMsg += "\n\nTip: This usually happens if the server is down or if you are opening the file directly from your computer (Double-clicking the .html file). Please ensure you are running this through a local server or web hosting.";
            }
            alert(userMsg);
        }
        hideLoader();
    });
}

function renderQuestion() {
    clearTransient();
    answered = false;
    selectedAnswer = null;
    if (footerEl) footerEl.style.display = "none";

    if (questions.length === 0) {
        questionEl.textContent = "Error: No questions found. Please contact your teacher.";
        optionsContainer.innerHTML = "";
        return;
    }

    if (current >= questions.length) {
        let scoreColor = "#e74c3c"; // Default Red (10 and below)
        if (score > 40) scoreColor = "#27ae60"; // Green (41-50)
        else if (score > 30) scoreColor = "#2980b9"; // Blue (31-40)
        else if (score > 20) scoreColor = "#f1c40f"; // Dark Yellow/Gold (21-30)
        else if (score > 10) scoreColor = "#e67e22"; // Orange (11-20)

        questionEl.innerHTML = (studentName ? (studentName + ", ") : "") + 
            "Tapos na ang pagsagot mo sa 4th Quarter Grade 8 - TLE Examination.<br>" +
            "<span style='font-size: 2.5rem; color: " + scoreColor + "; display: block; margin-top: 15px; font-weight: 800;'>" + 
            score + " / " + questions.length + "</span>";
            
        optionsContainer.innerHTML = "";
        scoreDisplay.style.display = "block";
        scoreDisplay.textContent = "Score: " + score;
        if (footerEl) footerEl.style.display = "block";
        
        // Add Repeat Exam instruction message
        const instructionMsg = document.createElement("p");
        instructionMsg.innerHTML = "Would you like to retake the Examination?<br><small>Click the 'Back to Menu' button for another student to take the exam.</small>";
        instructionMsg.style.marginTop = "20px";
        instructionMsg.style.color = "#555";
        instructionMsg.style.fontWeight = "600";
        optionsContainer.appendChild(instructionMsg);

        // Add Repeat Exam button
        const repeatBtn = document.createElement("button");
        repeatBtn.textContent = "Repeat Exam";
        repeatBtn.className = "option-btn";
        repeatBtn.style.marginTop = "20px";
        repeatBtn.style.background = "linear-gradient(135deg, #6dd5ed, #2193b0)";
        repeatBtn.style.color = "white";
        repeatBtn.style.border = "none";
        repeatBtn.onclick = () => {
            if (confirm("Are you sure you want to repeat the exam? Your current score has already been recorded.")) {
                score = 0;
                current = 0;
                renderQuestion();
            }
        };
        optionsContainer.appendChild(repeatBtn);

        recordAndOfferDownload();
        return;
    }
    const q = questions[current];
    questionEl.textContent = (current + 1) + ". " + q.q;
    optionsContainer.innerHTML = "";
    optionButtons = [];
    q.a.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.className = "option-btn";
        btn.addEventListener("click", () => onOptionClick(opt, btn));
        optionsContainer.appendChild(btn);
        optionButtons.push(btn);
    });
    scoreDisplay.style.display = "block";
    scoreDisplay.textContent = "Score: " + score;
}

function onOptionClick(opt, btn) {
    if (answered) return;
    selectedAnswer = opt;
    const all = optionsContainer.querySelectorAll("button");
    all.forEach(b => b.classList.remove("option-selected"));
    if (btn) btn.classList.add("option-selected");
    showConfirm();
}

function showConfirm() {
    if (confirmEl) confirmEl.remove(); // Remove old modal if any

    confirmEl = document.createElement("div");
    confirmEl.className = "modal-overlay";
    confirmEl.innerHTML = `
        <div class="modal-content">
            <p>Are you sure with your answer in <b>Question #${current + 1}</b>?</p>
            <div class="modal-buttons">
                <button class="confirm-btn yes">YES</button>
                <button class="confirm-btn no">NO</button>
            </div>
        </div>
    `;

    document.body.appendChild(confirmEl);

    // Add a slight delay to allow the element to be in the DOM before adding the visible class
    setTimeout(() => {
        confirmEl.classList.add("visible");
    }, 10);

    confirmYesBtnEl = confirmEl.querySelector(".yes");
    confirmNoBtnEl = confirmEl.querySelector(".no");

    confirmYesBtnEl.addEventListener("click", () => confirmYes(confirmYesBtnEl));
    confirmNoBtnEl.addEventListener("click", () => confirmNo(confirmNoBtnEl));

    // Add keyboard listeners
    document.addEventListener("keydown", handleConfirmKeydown);
}

function handleConfirmKeydown(e) {
    if (e.key === "Enter") {
        if (confirmYesBtnEl) {
            confirmYesBtnEl.click();
        }
    } else if (e.key === "Escape") {
        if (confirmNoBtnEl) {
            confirmNoBtnEl.click();
        }
    }
}



function confirmNo(btn) {
    if (btn) btn.classList.add("confirm-selected");
    if (confirmEl) {
        confirmEl.classList.remove("visible");
        // Wait for the transition to finish before removing the element
        setTimeout(() => {
            if (confirmEl) confirmEl.remove();
            confirmEl = null;
        }, 300);
    }
    confirmYesBtnEl = null;
    confirmNoBtnEl = null;
    document.removeEventListener("keydown", handleConfirmKeydown);
}

function confirmYes(btn) {
    if (answered) return;
    answered = true;
    if (btn) btn.classList.add("confirm-selected");
    
    // Remove confirmation modal immediately to prevent it from interfering with feedback modal
    if (confirmEl) {
        confirmEl.classList.remove("visible");
        const oldModal = confirmEl;
        setTimeout(() => {
            if (oldModal && oldModal.parentNode) oldModal.parentNode.removeChild(oldModal);
        }, 300);
        confirmEl = null;
    }
    confirmYesBtnEl = null;
    confirmNoBtnEl = null;
    document.removeEventListener("keydown", handleConfirmKeydown);

    const correct = questions[current].correct;
    const hasKey = typeof correct === "string" && correct.length > 0;
    let isCorrect = false;

    if (hasKey) {
        isCorrect = selectedAnswer === correct;
        if (isCorrect) {
            score += 1;
            scoreDisplay.textContent = "Score: " + score;
            scoreDisplay.classList.add("score-pulse");
            setTimeout(() => {
                scoreDisplay.classList.remove("score-pulse");
            }, 500);
        }
        try {
            if (isCorrect) {
                correctAudio.currentTime = 0;
                correctAudio.play();
            } else {
                incorrectAudio.currentTime = 0;
                incorrectAudio.play();
            }
        } catch (e) {}
    }

    // Create Feedback Pop-up
    confirmEl = document.createElement("div");
    confirmEl.className = "modal-overlay";
    
    let feedbackText = "";
    let feedbackClass = "";
    if (!hasKey) {
        feedbackText = "Answer recorded.";
        feedbackClass = "feedback-neutral";
    } else {
        feedbackText = isCorrect ? "Your answer is correct." : "Your answer is incorrect.";
        feedbackClass = isCorrect ? "feedback-correct" : "feedback-incorrect";
    }

    confirmEl.innerHTML = `
        <div class="modal-content">
            <div class="${feedbackClass}">${feedbackText}</div>
            <div class="modal-buttons">
                <button class="next-btn-pop">Next Question</button>
            </div>
        </div>
    `;

    document.body.appendChild(confirmEl);
    setTimeout(() => {
        confirmEl.classList.add("visible");
    }, 10);

    nextBtn = confirmEl.querySelector(".next-btn-pop");
    nextBtn.addEventListener("click", () => {
        // Remove feedback modal
        if (confirmEl) {
            confirmEl.classList.remove("visible");
            const feedbackModal = confirmEl;
            setTimeout(() => {
                if (feedbackModal && feedbackModal.parentNode) feedbackModal.parentNode.removeChild(feedbackModal);
            }, 300);
            confirmEl = null;
        }

        if (questionWrapper) {
            questionWrapper.classList.add("fade-out");
            setTimeout(() => {
                current++;
                renderQuestion();
                questionWrapper.classList.remove("fade-out");
                questionWrapper.classList.add("fade-in");
                setTimeout(() => {
                    questionWrapper.classList.remove("fade-in");
                }, 400);
            }, 400);
        } else {
            current++;
            renderQuestion();
        }
    });

    const buttons = optionsContainer.querySelectorAll("button");
    buttons.forEach(b => b.disabled = true);
}

function handleKeyShortcuts(e) {
    if (nameInputEl && startBtnEl && nameInputEl.offsetParent !== null) {
        if (e.key === "Enter") {
            startBtnEl.click();
        }
        return;
    }
    if (confirmEl && confirmEl.offsetParent !== null) {
        if (e.key === "Enter") {
            if (confirmYesBtnEl) confirmYesBtnEl.click();
            else if (nextBtn) nextBtn.click();
            return;
        }
        if (e.key === "Escape") {
            if (confirmNoBtnEl) confirmNoBtnEl.click();
            return;
        }
    }
    if (nextBtn && nextBtn.offsetParent !== null) {
        if (e.key === "Enter") {
            nextBtn.click();
            return;
        }
    }
    if (!answered && optionButtons && optionButtons.length > 0) {
        const n = parseInt(e.key, 10);
        if (!isNaN(n) && n >= 1 && n <= optionButtons.length) {
            const idx = n - 1;
            const btn = optionButtons[idx];
            const optText = questions[current].a[idx];
            onOptionClick(optText, btn);
        }
    }
}

showNameForm();

if (backBtn) {
    backBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const href = backBtn.getAttribute("href");
        let msg = "Are you sure you want to leave this exam? Your current progress will not be saved.";
        if (current >= questions.length && questions.length > 0) {
            msg = "Are you sure you want to leave this exam? Your current progress is saved.";
        }
        const ok = window.confirm(msg);
        if (ok && href) {
            window.location.href = href;
        }
    });
}

if (nameBadge) {
    nameBadge.style.display = "none";
}

function applyBackground() {
    document.body.style.backgroundImage = "url(../assets/background-images/bg" + bgIndex + ".png)";
}

function updateThemeToggleLabel() {
    const isDark = document.body.classList.contains("dark-mode");
    if (themeToggle) {
        themeToggle.title = isDark ? "Switch to Light" : "Switch to Dark";
        themeToggle.textContent = isDark ? "☀" : "☾";
    }
}

if (bgToggle) {
    bgToggle.addEventListener("click", () => {
        bgIndex = bgIndex % 10 + 1;
        applyBackground();
    });
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        updateThemeToggleLabel();
    });
}

applyBackground();
updateThemeToggleLabel();
async function loadExternalQuestions() {
    try {
        let txt = "";
        // Priority 1: Local JS data
        if (window.EXAM_QUESTIONS_DATA) {
            console.log("Using local script data for questions.");
            txt = window.EXAM_QUESTIONS_DATA;
        } else {
            // Priority 2: Fetch
            const res = await fetch("exam-questions.txt?nocache=" + Date.now());
            if (res && res.ok) {
                txt = await res.text();
            }
        }

        if (txt) {
            const parsed = parseTxtQuestions(txt);
            if (parsed && parsed.length) {
                questions = parsed;
                try {
                    let keyTxt = "";
                    // Priority 1: Local JS key
                    if (window.ANSWER_KEY_DATA) {
                        console.log("Using local script data for answer key.");
                        keyTxt = window.ANSWER_KEY_DATA;
                        // Check if it's base64 encoded
                        if (!keyTxt.includes("\n") && keyTxt.length > 20) {
                            try {
                                keyTxt = atob(keyTxt);
                            } catch (e) {
                                console.warn("Failed to decode base64 answer key, using as is.");
                            }
                        }
                    } else {
                        // Priority 2: Fetch key
                        let keyRes = await fetch("answer-key.txt?nocache=" + Date.now());
                        if (keyRes && keyRes.ok) {
                            keyTxt = await keyRes.text();
                        } else {
                            keyRes = await fetch("exam-questions-answerkey.txt?nocache=" + Date.now());
                            if (keyRes && keyRes.ok) {
                                keyTxt = await keyRes.text();
                            }
                        }
                    }
                    if (keyTxt) applyAnswerKey(questions, keyTxt);
                } catch (_) {}

                // Group dependent questions before shuffling
                const groupedQuestions = groupDependentQuestions(questions, '8-tle');
                questions = shuffleArray(groupedQuestions);
            }
        }
    } catch (e) {
        console.error("Error in loadExternalQuestions:", e);
    }
}

/**
 * Groups dependent questions together so they stay in sequence during shuffling.
 * Returns an array of either question objects or arrays of question objects (blocks).
 */
function groupDependentQuestions(qs, grade) {
    const blocks = [];
    const visited = new Set();

    // Define dependencies for each grade
    const dependencies = {
        7: [[10, 11, 12, 13], [41, 42]], // 0-indexed: 11-14, 42-43
        8: [[7, 8, 9], [26, 27, 28, 29]], // 0-indexed: 8-10, 27-30
        9: [[20, 21]], // 0-indexed: 21-22
        10: [[11, 12], [30, 31]] // 0-indexed: 12-13, 31-32
    };

    const gradeDeps = dependencies[grade] || [];

    for (let i = 0; i < qs.length; i++) {
        if (visited.has(i)) continue;

        let foundGroup = null;
        for (const group of gradeDeps) {
            if (group.includes(i)) {
                foundGroup = group;
                break;
            }
        }

        if (foundGroup) {
            const block = [];
            for (const idx of foundGroup) {
                if (qs[idx]) {
                    block.push(qs[idx]);
                    visited.add(idx);
                }
            }
            blocks.push({ type: 'group', items: block });
        } else {
            blocks.push({ type: 'single', item: qs[i] });
            visited.add(i);
        }
    }
    return blocks;
}

/**
 * Shuffles the blocks and flattens them back into a single questions array.
 */
function shuffleArray(blocks) {
    for (let i = blocks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [blocks[i], blocks[j]] = [blocks[j], blocks[i]];
    }

    const flattened = [];
    blocks.forEach(block => {
        if (block.type === 'group') {
            flattened.push(...block.items);
        } else {
            flattened.push(block.item);
        }
    });
    return flattened;
}
function parseTxtQuestions(text) {
    // Remove BOM if present
    if (text.charCodeAt(0) === 0xFEFF) {
        text = text.slice(1);
    }
    const lines = text.split(/\r?\n/).map(l => l.trim());
    const qs = [];
    let q = null;
    let opts = [];
    const flush = () => {
        // Filter out null/undefined to get a clean list of options
        const cleanOpts = opts.filter(o => o !== null && o !== undefined);
        if (q && cleanOpts.length > 0) {
            qs.push({ q: q.trim(), a: cleanOpts, correct: null });
        }
        q = null;
        opts = [];
    };
    
    const qRe = /^(\d+)\.\s*(.+)$/;
    const labels = ["A.", "B.", "C.", "D."];

    for (let line of lines) {
        if (!line) continue;
        const qm = line.match(qRe);
        if (qm) {
            flush();
            q = qm[2].trim();
            continue;
        }
        
        // Handle options
        let lineHasLabel = false;
        labels.forEach((label) => {
            let startIdx = line.indexOf(label);
            if (startIdx !== -1 && (startIdx === 0 || /\s/.test(line[startIdx - 1]))) {
                lineHasLabel = true;
            }
        });

        if (lineHasLabel) {
            let currentLabelIndices = [];
            labels.forEach((label, idx) => {
                let pos = line.indexOf(label);
                if (pos !== -1 && (pos === 0 || /\s/.test(line[pos - 1]))) {
                    currentLabelIndices.push({ label, pos, idx });
                }
            });
            
            currentLabelIndices.sort((a, b) => a.pos - b.pos);
            
            for (let i = 0; i < currentLabelIndices.length; i++) {
                let start = currentLabelIndices[i].pos + currentLabelIndices[i].label.length;
                let end = (i + 1 < currentLabelIndices.length) ? currentLabelIndices[i + 1].pos : line.length;
                let optText = line.substring(start, end).trim();
                if (optText) {
                    // Place the option at the correct index (A=0, B=1, C=2, D=3)
                    opts[currentLabelIndices[i].idx] = optText;
                }
            }
            continue;
        }

        if (q !== null) {
            q += " " + line;
        }
    }
    flush();
    return qs;
}
function applyAnswerKey(qs, keyText) {
    const letters = keyText.split(/\r?\n/).map(l => l.trim().toUpperCase()).filter(Boolean);
    const map = { A: 0, B: 1, C: 2, D: 3 };
    for (let i = 0; i < qs.length && i < letters.length; i++) {
        const idx = map[letters[i]];
        if (idx != null && qs[i].a[idx] != null) {
            qs[i].correct = qs[i].a[idx];
        }
    }
}
document.addEventListener("keydown", handleKeyShortcuts);

function getScoreRecords() {
    try {
        const raw = localStorage.getItem(SCORE_KEY);
        if (!raw) return [];
        const arr = JSON.parse(raw);
        if (Array.isArray(arr)) return arr;
        return [];
    } catch (e) {
        return [];
    }
}

function setScoreRecords(records) {
    try {
        localStorage.setItem(SCORE_KEY, JSON.stringify(records));
    } catch (e) {}
}

function addScoreRecord(name, sc, total) {
    const records = getScoreRecords();
    const pct = total > 0 ? Math.round((sc / total) * 10000) / 100 : 0;
    const rec = {
        name: name || "",
        score: sc,
        total: total,
        percentage: pct,
        datetime: new Date().toISOString()
    };
    records.push(rec);
    setScoreRecords(records);
    return records;
}

function exportToExcel() {
    try {
        const wb = XLSX.utils.book_new();
        const grades = [7, 8, '8-tle', 9, 10];
        
        grades.forEach(g => {
            const key = "g" + g + "_scores";
            const raw = localStorage.getItem(key);
            let records = [];
            if (raw) {
                try {
                    records = JSON.parse(raw);
                } catch (e) {}
            }
            
            const data = records.map(r => ({
                "Name": r.name,
                "Score": r.score,
                "Total": r.total,
                "Percentage": r.percentage + "%",
                "Date/Time": new Date(r.datetime).toLocaleString()
            }));
            
            const ws = XLSX.utils.json_to_sheet(data);
            XLSX.utils.book_append_sheet(wb, ws, "grade" + g + "-result");
        });
        
        XLSX.writeFile(wb, "examinees-summary-results.xlsx");
    } catch (e) {
        console.error("Excel export failed:", e);
        alert("Failed to export Excel file. Please ensure SheetJS is loaded.");
    }
}

function recordAndOfferDownload() {
    addScoreRecord(studentName, score, questions.length);
    // Student download button removed as per requirements.
    
    // Save to Firebase Firestore if initialized
    if (typeof saveScoreToFirebase === 'function') {
        saveScoreToFirebase("8-tle", studentName, score, questions.length);
    }
}
