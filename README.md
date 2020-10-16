# MVP

## Top Priority

- Windows
  - Cascade padding with max width/height padding
    - https://docs.microsoft.com/en-ca/windows/win32/uxguide/win-window-mgt#window-location
    - Get absolute x/y and not relative to start point (then offsets will be easier)
- Start Menu
  - Complete UI/UX

## System

- File Manager
  - Switch to react-table for resizable/sortable/scrollable columns
  - Sort contents by name/date
  - File stat solution needed for uploaded files
  - Add modified time
  - Open folders in new windows
- Taskbar
  - Add padding to left of clock if needed
- Icons
  - Switch to `grid` to fix icon landscape issues (https://grid.layoutit.com/)
  - Save icon positions (Stop using translate if possible)
  - zIndex on drag should be above windows
- Windows
  - Animate open/close from icon on list view
  - Delay foregrounding next window until close/minimize is done animating
    - Add foreground zindex to those animations
  - Hover on button not nav, like osx (make nav padding tight)

## Apps

- DOS
  - Visual glitch on un-minimizes
- Winamp
  - Positioning and animation issues on load
  - Seek bar visible when minimized and playing
  - Issue with focus when clicking via taskbar and on mobile
- Document Viewer (https://webodf.org/)
- PDF Viewer
- JS Paint (https://github.com/1j01/jspaint)
- Minesweeper
  - https://github.com/ziebelje/minesweeper
  - https://github.com/ShizukuIchi/minesweeper

## Refactoring

- Move all types defined in .tsx/.ts into .d.ts files
  - Use "Props" when proper
- Alphabetize all constants, variables, props, functions, etc
- Group exports together at the bottom
- Try styled components to see if its better
- Extract all magic numbers to variables

# Post-MVP

## System

- Right Click Menu's
- Improve titlebar text to truncate better
- Save Session
- URL Routing via opening `.url`
- Icon text truncation breaks at 3 lines
- Improve color cycle (https://krazydad.com/tutorials/makecolors.php)

## Apps

- DOS virtual keyboard on mobile
- Video Player (https://github.com/videojs/video.js)
- Photo Viewer
