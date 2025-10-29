# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Developer Role & Guidelines

You are a senior React frontend engineer helping to fix and improve this portfolio. Follow React & UI best practices. Keep the structure intact - only improve and extend existing functionality.

**Code Style:**
- Do not use emojis in code, comments, or commit messages
- Follow clean, professional coding standards

## Project Overview

**Myportifolio** is a React-based personal portfolio website built with Vite. The project showcases a professional portfolio with sections for home, about, skills, services, and contact.

**Tech Stack:**
- React 19 with JSX
- Vite (build tool and dev server)
- ESLint (code linting)
- CSS for styling

## Project Structure

```
portifolio/
├── src/
│   ├── main.jsx              # React entry point
│   ├── App.jsx               # Main app component
│   ├── App.css               # Global styles
│   ├── components/
│   │   ├── header/           # Navigation header with toggle menu
│   │   │   ├── header.jsx
│   │   │   └── header.css (Header.css)
│   │   └── home/             # Home section with hero content
│   │       ├── home.jsx      # Main home container
│   │       ├── home.css (Home.css)
│   │       ├── social.jsx    # Social media links
│   │       ├── Data.jsx      # Personal info/headline
│   │       └── ScrollDown.jsx # Scroll indicator
├── index.html                # HTML entry point with Unicons/Boxicons CDN
├── vite.config.js            # Vite config (port 3000, auto-open)
├── eslint.config.js          # ESLint rules
├── package.json              # Dependencies & scripts
└── node_modules/
```

## Common Commands

All commands should be run from the `portifolio/` directory:

```bash
# Development server (opens at http://localhost:3000)
npm run dev

# Production build
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Key Architecture Notes

1. **Component Structure:** The app uses a simple hierarchical structure with Header (top nav) and Home (hero section) as main components. Home contains subcomponents: Social, Data, and ScrollDown.

2. **Styling:** Uses external CSS files corresponding to components. Note: Some CSS files use capitalized names (e.g., `Header.css`, `Home.css`) while imports vary in case.

3. **Icons:** The project uses:
   - **Unicons** (via CDN) for navigation and UI icons
   - **Boxicons** (via CDN) for additional icon support
   - Both are loaded in `index.html` from CDN links

4. **Navigation:** Header includes a toggle menu for mobile responsiveness. The menu uses internal hash anchors (`#home`, `#about`, `#skills`, etc.).

5. **Vite Dev Server:** Configured to auto-open the browser and run on port 3000.

## ESLint Configuration

The project uses ESLint 9 with these key rules:
- React Hooks best practices enabled
- React Refresh plugin for HMR support
- Unused variables rule ignores uppercase patterns (constants, components)
- Files checked: `**/*.{js,jsx}`
- Ignored: `dist/` directory

## Development Notes

- **React Version:** 19 - uses latest React features
- **Module Type:** ES modules (native)
- **JSX:** Babel is configured via Vite's React plugin
- **CSS Imports:** Use relative paths in components (e.g., `./header.css`)
- Developer Role & guidelines.improve the tablet and mobile version,also the desktop(i see big spaces between the sections),improve the text organization and add image illustration where can be added,also on the skill you are free to add more skills and remove the emojis use a simple UI