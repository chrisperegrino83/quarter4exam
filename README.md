# 4th Quarter Final Assessment System

A robust, **serverless** and secure online examination portal designed for high school assessments. This system operates entirely in the browser using **Local Storage**, eliminating the need for a backend or database while maintaining full functionality.

---

## **🚀 Key Features**

- **Serverless Architecture**: No database or API required. All student data, results, and settings are handled via browser local storage.
- **Randomized Question Order**: Shuffles questions for each student to prevent cheating.
- **Dependency Grouping**: Automatically groups dependent questions (e.g., "Based on the text above...") so they stay together during randomization.
- **Answer Key Protection**: Obfuscates the correct answers using Base64 encoding to prevent students from finding them via "Inspect Element."
- **Local Storage Result Tracking**: Automatically saves student scores, names, and completion times to the browser's local storage.
- **Public Leaderboards**: A live "Top Scorers" page for each grade level based on local records, featuring **Trophy Icons** (🏆, 🥈, 🥉) for the top 3 ranks.
- **Unified Branding**: Consistent **Favicon** (ULHS Logo) and UI across all student and admin pages.
- **Student Profile Integration**: Student photos appear side-by-side with the school logo upon login (if photos are provided in `assets/students-photo/`).
- **Admin Dashboard**: Centralized management for viewing, filtering, and deleting local results, as well as exporting to Excel and **merging results** from other devices.

---

## **🛠️ Setup Instructions**

### **1. Remote Assessment (Google Sheets Integration)**
If you are administering the exam online (e.g., via GitHub Pages), you can track results in real-time. The easiest way to find the correct IDs is the **"Get pre-filled link"** method:

1.  **Create your Google Form**: Add 5 short-answer fields: *Student Name*, *Grade*, *Score*, *Total*, and *Percentage*.
2.  **Get the Pre-filled Link**:
    - In your Google Form editor, click the **three dots (⋮)** in the top right.
    - Select **"Get pre-filled link"**.
    - Type "StudentName" in the first box, "Grade" in the second, etc.
    - Click **"Get link"** at the bottom, then click **"Copy link"**.
3.  **Extract the IDs**:
    - Paste the link in Notepad. It will look like this:
      `https://docs.google.com/forms/d/e/.../viewform?entry.123456789=StudentName&entry.987654321=Grade...`
    - Copy the URL part before the `?` and change `viewform` at the end to `formResponse`. This is your `GOOGLE_FORM_URL`.
    - The `entry.123456789` parts are your field IDs.
4.  **Update Your Code**: In each grade's `script.js`, replace the `GOOGLE_FORM_URL` and the `entry.XXXX` values with yours.

### **2. Consolidating Results from Multiple Devices**
Since the system is serverless, each device (e.g., tablet, laptop) stores its own results. To access all results in one "master" device:
1.  **Export**: On each student device, log into the Admin Dashboard and click **Download Summary Results (Excel)**.
2.  **Transfer**: Move these Excel files to your "master" device (e.g., via USB or email).
3.  **Merge**: On your master device, log into the Admin Dashboard, go to the **Merge Results from Other Devices** section, and upload each Excel file.
4.  The master device will now show a combined list of all examinees.

### **2. Managing Student Lists**
Each grade level has its own `students-list.js` and `students-list.txt`. 
- To add students manually, edit the file in the respective grade folder (e.g., `grade7/students-list.js`).
- Names must be one per line.
- **Admin Panel**: You can also add students via the Admin Dashboard. These students are saved to `localStorage` and can be exported back to a `.txt` file for permanent inclusion.

### **2. Updating Questions**
Questions are stored in `exam-questions.js` (or `.txt`).
- Format: `1. Question text` followed by `A. Option 1`, `B. Option 2`, etc.
- Questions that build on each other are automatically handled by the grouping logic in `script.js`.

---

## **👨‍🏫 Admin Management**

- **Admin Login**: Access the dashboard via `/admin/index.html`.
- **Default Admin Password**: Password is hashed using SHA-256 encryption (Change this in [admin/index.html](file:///admin/index.html) for security).
- **Exporting Results**: Use the "Download Summary Results" button in the dashboard to generate an Excel file containing all local records.
- **Managing Results**: Filter by grade level to see all student entries in the local storage and delete them if necessary.
- **Student Photo Support**: Add student JPG photos to `assets/students-photo/` named exactly as they appear in the student list (e.g., `JUAN DELA CRUZ.jpg`).

---

## **🔒 Security & Privacy**

- **Base64 Answer Keys**: Correct answers are stored as encoded strings in `answer-key.js`.
- **Privacy**: Student photos and Excel result exports are ignored by git (via `.gitignore`) to protect student privacy.

---

## **📁 Project Structure**

- `/admin`: Admin login and dashboard.
- `/assets`: Logos, sounds, background images, and student photos (ignored).
- `/gradeX`: Folder for each grade level (7, 8, 8-TLE, 9, 10).
- `leaderboards.html`: Public page for top scorers.
- `start_server.bat`: Run this to start a local server (requires Python).

---

© 2026 Sir Chris | Developed with ❤️ for better assessment integrity.
