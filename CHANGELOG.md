# Changelog

All notable changes to the **4th Quarter Assessment Portal** will be documented in this file.

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
