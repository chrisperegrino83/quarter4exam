# 4th Quarter Final Assessment System

A robust and secure online examination portal designed for high school assessments. This system includes features like randomized question orders, answer key protection, cloud-based result tracking via Firebase, and a centralized admin dashboard.

---

## **🚀 Key Features**

- **Randomized Question Order**: Shuffles questions for each student to prevent cheating.
- **Dependency Grouping**: Automatically groups dependent questions (e.g., "Based on the text above...") so they stay together during randomization.
- **Answer Key Protection**: Obfuscates the correct answers using Base64 encoding to prevent students from finding them via "Inspect Element."
- **Real-Time Cloud Sync**: Automatically saves student scores, names, and completion times to **Firebase Firestore**.
- **Public Leaderboards**: A live "Top Scorers" page for each grade level.
- **Admin Dashboard**: Centralized management for viewing, filtering, and deleting cloud results, as well as exporting to Excel.

---

## **🛠️ Setup Instructions**

### **1. Firebase Configuration**
1.  Create a project in the [Firebase Console](https://console.firebase.google.com/).
2.  Enable **Firestore Database** in **Native Mode**.
3.  Add a **Web App** to your project and copy the configuration object.
4.  Copy [firebase-config.js.template](file:///firebase-config.js.template) to `firebase-config.js`.
5.  Paste your Firebase keys into [firebase-config.js](file:///firebase-config.js).

### **2. Managing Student Lists**
Each grade level has its own `students-list.js` or `students-list.txt`. 
- To add students manually, edit the file in the respective grade folder (e.g., `grade7/students-list.js`).
- Names must be one per line.

### **3. Updating Questions**
Questions are stored in `exam-questions.js` (or `.txt`).
- Format: `1. Question text` followed by `A. Option 1`, `B. Option 2`, etc.
- Questions that build on each other are automatically handled by the grouping logic in `script.js`.

---

## **👨‍🏫 Admin Management**

- **Admin Login**: Access the dashboard via `/admin/index.html`.
- **Default Password**: `admin123` (Change this in [admin/index.html](file:///admin/index.html) for security).
- **Exporting Results**: Use the "Download Summary Results" button in the dashboard to generate an Excel file containing all Cloud and Local records.
- **Managing Cloud Data**: Filter by grade level to see all student entries in the cloud and delete them if necessary.

---

## **🔒 Security & Privacy**

- **.gitignore**: Sensitive files like `firebase-config.js` and student photos in `assets/students-photo/` are ignored by default to protect your data on public repositories.
- **Base64 Answer Keys**: Correct answers are stored as encoded strings in `answer-key.js`.

---

## **📁 Project Structure**

- `/admin`: Admin login and dashboard.
- `/assets`: Logos, sounds, and student photos.
- `/gradeX`: Folder for each grade level (7, 8, 8-TLE, 9, 10).
- `firebase-config.js`: Your private Firebase project keys.
- `firebase-service.js`: Centralized logic for Firestore operations.
- `leaderboards.html`: Public page for top scorers.

---

© 2026 Sir Chris | Developed with ❤️ for better assessment integrity.
