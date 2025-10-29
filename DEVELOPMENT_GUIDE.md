# Development Guide

Quick reference for working with the refactored portfolio.

## Design System

All design tokens are defined in `src/styles/variables.css`. Update values there to globally change the design.

### Common CSS Variables

```css
/* Colors */
--color-primary: #0e2f5e
--color-accent: #ff6b35
--color-white: #ffffff
--color-light: #f5f5f5

/* Spacing (8px grid) */
--spacing-md: 1rem
--spacing-lg: 1.5rem
--spacing-xl: 2rem
--spacing-2xl: 3rem

/* Font sizes */
--font-size-base: 1rem
--font-size-lg: 1.125rem
--font-size-xl: 1.25rem

/* Responsive breakpoints */
--breakpoint-md: 768px
--breakpoint-lg: 992px
```

## Component Usage

### Section Component

Wrap all page sections with the Section component for consistency:

```jsx
import Section from '../common/Section';

<Section
  id="about"
  title="About Me"
  subtitle="Learn more about my background"
>
  <p>Your content here</p>
</Section>
```

**Props:**
- `id` (required) - Section ID for navigation
- `title` - Section heading
- `subtitle` - Subheading text
- `children` - Section content
- `className` - Additional CSS classes

### Button Component

Use the Button component for all clickable CTAs:

```jsx
import Button from '../common/Button';

<Button
  variant="primary"
  size="lg"
  href="#portfolio"
>
  View Portfolio
</Button>
```

**Props:**
- `variant` - 'primary' | 'secondary' | 'outline' (default: 'primary')
- `size` - 'sm' | 'md' | 'lg' (default: 'md')
- `href` - Link URL (renders as anchor tag)
- `type` - Button type: 'button' | 'submit' | 'reset'
- `onClick` - Click handler function
- `disabled` - Disabled state
- `children` - Button text/content

## Adding a New Section

### Step 1: Create Component Files

```
src/components/newsection/
├── NewSection.jsx
└── NewSection.css
```

### Step 2: Create Component

```jsx
// NewSection.jsx
import React from 'react';
import Section from '../common/Section';
import Button from '../common/Button';
import './NewSection.css';

const NewSection = () => {
  return (
    <Section
      id="newsection"
      title="New Section"
      subtitle="Description here"
    >
      <div className="newsection__content">
        {/* Your content */}
      </div>
    </Section>
  );
};

export default NewSection;
```

### Step 3: Style It

```css
/* NewSection.css */
.newsection__content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-2xl);
}

/* Use CSS variables for consistency */
@media screen and (max-width: 768px) {
  .newsection__content {
    grid-template-columns: 1fr;
  }
}
```

### Step 4: Add to App.jsx

```jsx
import NewSection from './components/newsection/NewSection';

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <NewSection />        {/* Add here */}
        {/* ... rest of sections */}
      </main>
    </>
  );
};
```

### Step 5: Add Navigation Link

Update the navigation array in `src/components/header/header.jsx`:

```jsx
const navLinks = [
  // ... existing links
  { href: "#newsection", icon: "uil-icon-name", label: "New Section" },
];
```

## Responsive Design

Use these breakpoints for responsive design:

```css
/* Desktop - no media query needed */
.class { /* desktop styles */ }

/* Large devices (tablets and larger) */
@media screen and (max-width: 992px) {
  .class { /* adjustments */ }
}

/* Medium devices (tablets) */
@media screen and (max-width: 768px) {
  .class { /* adjustments */ }
}

/* Small devices (phones) */
@media screen and (max-width: 576px) {
  .class { /* adjustments */ }
}
```

## Accessibility

### Keyboard Navigation
- All interactive elements must be focusable
- Add focus-visible styles to all buttons and links
- Test with Tab key

### ARIA Attributes
```jsx
<button
  aria-label="Close menu"
  aria-expanded={isOpen}
  aria-current={isActive ? "page" : undefined}
>
  {/* content */}
</button>
```

### Semantic HTML
```jsx
// Good
<button onClick={handleClick}>Click me</button>
<a href="/page">Link</a>
<nav>{/* navigation links */}</nav>

// Avoid
<div onClick={handleClick}>Click me</div>
<span className="link">Link</span>
```

## CSS Best Practices

### Use Variables
```css
/* Good */
color: var(--title-color);
padding: var(--spacing-lg);
border-radius: var(--radius-md);

/* Avoid */
color: #1a1a1a;
padding: 24px;
border-radius: 8px;
```

### Responsive Text
```css
/* Use size variables that scale responsively */
font-size: var(--h1-font-size);

/* App.css handles responsive sizing */
@media screen and (max-width: 992px) {
  :root {
    --h1-font-size: 1.5rem;
  }
}
```

### Hover States
```css
.button {
  transition: var(--transition-normal);
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

## Common Tasks

### Change Primary Color
Edit `src/styles/variables.css`:
```css
--color-primary: #YOUR-NEW-COLOR;
--color-primary-light: #LIGHTER-SHADE;
--color-primary-lighter: #EVEN-LIGHTER;
```

### Adjust Spacing
Edit `src/styles/variables.css`:
```css
--spacing-md: 1.25rem;  /* was 1rem */
--spacing-lg: 1.75rem;  /* was 1.5rem */
/* All components will adjust automatically */
```

### Update Font
Edit `src/styles/variables.css`:
```css
--font-primary: 'Your Font', sans-serif;
/* Import if needed at top of App.css */
@import url('https://fonts.googleapis.com/css2?family=Your+Font');
```

### Add Animation
```css
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.element {
  animation: slideIn var(--transition-normal);
}
```

## Testing Checklist

Before deploying:
- [ ] Run `npm run lint` - no errors
- [ ] Run `npm run build` - successful build
- [ ] Test on mobile (< 576px)
- [ ] Test on tablet (< 768px)
- [ ] Test on desktop (> 1200px)
- [ ] Test keyboard navigation (Tab, Enter, Escape)
- [ ] Test active link highlighting
- [ ] Test form submission
- [ ] Check all links work
- [ ] Verify images load

## Performance Tips

1. **Use CSS variables** instead of hardcoded values
2. **Use `transform`** for animations (GPU accelerated)
3. **Use CSS Grid/Flexbox** instead of floats
4. **Minimize media queries** - use CSS variables for responsive sizing
5. **Lazy load images** - especially in portfolio section
6. **Minify CSS** - done automatically by Vite

## Deployment

```bash
# Build for production
npm run build

# Output goes to dist/
# Deploy the dist/ folder to your hosting
```

## Common Issues

### Active link not updating
- Ensure section has an `id` attribute
- Check that Header component's Intersection Observer is running
- Verify CSS class `.active-link` has styles

### Mobile menu not working
- Check that `nav__toggle` and `nav__menu` elements exist
- Ensure click handlers are attached
- Test ESC key and click-outside functionality

### Responsive layout broken
- Check for hardcoded px values instead of variables
- Use `max-width` instead of `width: 100vw`
- Test at breakpoints: 576px, 768px, 992px, 1200px

### Styles not applying
- Check CSS import order (variables.css should be first)
- Verify specificity (utilities have low specificity by design)
- Check for typos in class names

## Resources

- [MDN Web Docs](https://developer.mozilla.org)
- [CSS Tricks](https://css-tricks.com)
- [Web Accessibility](https://www.w3.org/WAI/)
- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)

---

**Need help?** Check REFACTORING_SUMMARY.md for detailed changes or CLAUDE.md for project overview.
