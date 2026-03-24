# Task: Build Code Visual Image Application

## Plan
- [x] Initialize Project Structure
  - [x] Analyze current code and requirements
  - [x] Update `tailwind.config.js` and `src/index.css` for tech theme
- [x] Create Layout Components
  - [x] Implement `Navbar` and `Footer` in `src/components/layout/`
- [x] Implement Binary Visualization Components
  - [x] Create `BinaryCanvas` base component in `src/components/BinaryCanvas.tsx`
  - [x] Define the 5 patterns and animations
- [x] Build Pages
  - [x] Create `Home` page in `src/pages/Home.tsx`
  - [x] Update `src/routes.tsx` to include the Home page
- [x] Final Polishing
  - [x] Run `npm run lint` and fix issues
  - [x] Verify all animations and patterns

## Notes
- Use Framer Motion for smooth animations if possible, otherwise standard CSS animations.
- Ensure the design is dark-mode friendly by default.
- Binary patterns will be represented as 2D arrays of 0s and 1s.
