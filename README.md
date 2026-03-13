# 4th Quarter Assessment Portal (Grades 7-10)

Welcome to the 4th Quarter Assessment Portal. This is a web-based platform designed for students from Grade 7 to Grade 10 to take their final examinations in a digital format.

## 🚀 How to Start Your Exam

1. **Select Your Grade**: From the main menu, click on your corresponding grade level.
2. **Enter Your Full Name**: Type your complete name in the input box to begin.
3. **Answer the Questions**: Each grade has a 50-item question bank.
4. **Complete the Quiz**: After answering all questions, your final score will be displayed.
5. **View Your Results**:

## ✨ Key Features

- **Automated Scoring**: Scores are calculated instantly upon completion.
- **Dynamic Backgrounds**: Rotating background images for a better visual experience.
- **Theme Toggling**: Students can switch between Dark and Light modes.
- **Keyboard Shortcuts**: Use `Enter` to confirm answers and `Esc` to cancel.
- **Excel Summaries**: Results are compiled into a single Excel file with separate sheets for each grade level.
- **Offline Compatibility**: Works without a local server, ensuring stability during classroom hours.

## 📊 For Teachers: How to Collect Scores

Since this portal is hosted as a static site, results are stored in the student's browser (Local Storage).

### Option A: Student Submission (Online)
Ask each student to click the **Download Summary Results (Excel)** button after they finish. They should then email or upload the `.xlsx` file to your designated platform.

### Option B: Lab Collection (Offline/Local)
If students are using shared computers in a lab, you can go to each machine at the end of the exam session, click the download button on the results screen, and it will generate an Excel file containing all the students who took the exam on that specific computer.

## 🛠️ Technical Details

- **Built with**: HTML5, CSS3, and Vanilla JavaScript.
- **Libraries**: Uses [SheetJS (xlsx)](https://sheetjs.com/) for Excel generation.
- **Question Banks**: Embedded directly in the JavaScript files to ensure fast loading and bypass CORS issues.

---
© 2026 Sir Chris | Upper Labay High School (ULHS)
