# Changelog

All notable changes to the **4th Quarter Assessment Portal** will be documented in this file.

## [1.1.0] - 2026-03-08

### Added
- Integrated **SheetJS (xlsx)** library for Excel generation.
- New `exportToExcel` function to consolidate all grade results into one file.
- Professional `README.md` with instructions for students and teachers.
- Added 50-item question banks for Grade 10.

### Changed
- Replaced automatic CSV downloads with a manual **Download Summary Results (Excel)** button.
- Updated result format to a single `.xlsx` file with sheets: `grade7-result`, `grade8-result`, `grade9-result`, and `grade10-result`.
- Synchronized all grade folders to use the same logic and feature set.

### Fixed
- Resolved CORS issues by embedding question banks directly into `script.js` files.
- Improved question parsing to handle multiple options on a single line.

## [1.0.5] - 2026-03-07

### Added
- Synchronized 50-item question banks for Grades 8 and 9.
- Ported student name entry and theme toggling features from Grade 7 to all other grades.

### Fixed
- Fixed syntax and logic errors in `grade7/script.js` specifically within the `confirmYes` function.

## [1.0.0] - 2026-03-05

### Added
- Initial project structure with separate folders for Grades 7-10.
- Basic quiz functionality with dynamic backgrounds and theme toggling.
- CSV export functionality (later replaced in v1.1.0).
- Student name entry and score tracking using `localStorage`.
