# Changelog

All notable changes to the **4th Quarter Assessment Portal** will be documented in this file.

## [1.3.0] - 2026-03-14

### Added
- **Merge Results Feature**: Introduced a "Merge Results from Other Devices" feature in the Admin Dashboard. Admins can now import Excel exports from multiple devices into a single "master" device for centralized record-keeping.
- Enhanced duplicate detection during import to prevent redundant entries.

## [1.2.0] - 2026-03-14

### Added
- **Serverless Migration**: Fully transitioned the system to a serverless architecture using browser `localStorage` for all student data, results, and admin settings.
- Removed all Firebase dependencies and configuration files.
- Improved the "Add Student" feature in the Admin Dashboard with the ability to export an updated `students-list.txt` for permanent server updates.

### Changed
- Updated `README.md` with comprehensive documentation on the new serverless architecture and setup instructions.
- Standardized versioning across all HTML files and scripts (v1.2.0).
- Enhanced security by ensuring all result exports are ignored by version control.

## [1.1.3] - 2026-03-13

### Changed
- Updated confirmation message to display the current question number (e.g., "Are you sure with your answer in Question #1?") instead of the grade/subject name.
- Fixed a bug where the exam would not advance to the next question after answering the first item due to modal animation conflicts.
- Optimized the "Next Question" feedback flow with independent modal management.

## [1.1.2] - 2026-03-13

### Added
- Added new subject: **Grade 8 - TLE** with its own exam questions, answer key, and student results tracking.
- Updated admin dashboard to support the new Grade 8 - TLE subject (statistics, results management, and Excel export).

### Changed
- Standardized subject naming convention across the portal:
    - Grade 7 -> **Grade 7 - VE**
    - Grade 8 -> **Grade 8 - VE**
    - Grade 9 -> **Grade 9 - ESP**
    - Grade 10 -> **Grade 10 - ESP**
- Updated all `quiz.html` titles and `script.js` feedback messages to reflect the new subject names.
- Updated admin dashboard statistics and delete confirmation labels for better clarity.

## [1.1.1] - 2026-03-12

### Fixed
- Standardized keyboard shortcuts across all grade levels, assigning `Enter` for "YES" and `Esc` for "NO" in the answer confirmation pop-up.
- Refactored all grade-level scripts to remove redundant code and improve maintainability.

## [1.0.5] - 2026-03-10

### Fixed
- Improved name normalization to handle zero-width characters and hidden whitespace.
- Added robust BOM (Byte Order Mark) removal for student lists and question files.
- Implemented cache-busting for all grade level scripts and styles.
- Added detailed console logging for the authorization flow to improve transparency.
- Safeguarded `localStorage` parsing against corrupted data.

## [1.0.4] - 2026-03-09

### Fixed
- Updated all grade scripts to include versioned error reporting.
- Added defensive JSON parsing for admin-added students.
- Implemented URL encoding for student photo paths.

## [1.1.0] - 2026-03-08

## [1.0.0] - 2026-03-05

### Added
- Initial project structure with separate folders for Grades 7-10.
- Basic quiz functionality with dynamic backgrounds and theme toggling.
- CSV export functionality (later replaced in v1.1.0).
- Student name entry and score tracking using `localStorage`.
