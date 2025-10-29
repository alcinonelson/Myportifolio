# Internationalization (i18n) Implementation Guide

## Overview

Your portfolio now supports **English** and **Portuguese** with automatic language detection and manual switching.

---

## ✨ Features Implemented

### 1. **Auto Language Detection**
- Detects browser language on first visit
- Portuguese users see Portuguese automatically
- Falls back to English for all other languages

### 2. **Manual Language Toggle**
- Flag-based toggle button (🇺🇸/🇧🇷) in header (top-right)
- Click to switch between EN and PT
- Language preference saved to localStorage
- Persists across browser sessions

### 3. **Full Translation Coverage**
All sections translated:
- ✅ Navigation menu
- ✅ Home section
- ✅ About section
- ✅ Skills section (labels)
- ✅ Services section
- ✅ Portfolio section (titles, filters, descriptions)
- ✅ Contact section (form labels, placeholders)

---

## 🏗️ Architecture

### **Context-Based System**

```
src/
├── context/
│   ├── LanguageContext.jsx  # Language state management
│   └── ThemeContext.jsx      # Theme state management
├── locales/
│   ├── en.js                 # English translations
│   ├── pt.js                 # Portuguese translations
│   └── index.js              # Translation utilities
├── hooks/
│   └── useTranslation.js     # Custom hook for easy translation access
└── components/
    └── common/
        ├── LanguageToggle.jsx  # Language switcher component
        └── ThemeToggle.jsx     # Theme switcher component
```

---

## 📝 How to Use Translations

### **In Components**

```jsx
import { useTranslation } from '../../hooks/useTranslation';

const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('section.title')}</h1>
      <p>{t('section.description')}</p>
    </div>
  );
};
```

### **Translation Keys Format**

Translations use dot notation:
```javascript
t('section.subsection.key')

// Examples:
t('nav.home')               // "Home" or "Início"
t('about.title')            // "About Me" or "Sobre Mim"
t('portfolio.filters.all')  // "All" or "Todos"
```

---

## 🌐 Adding New Translations

### **Step 1: Add to English File**

Edit `src/locales/en.js`:
```javascript
export const en = {
  newSection: {
    title: "My New Section",
    subtitle: "This is a new section",
    description: "Some description here",
  },
};
```

### **Step 2: Add to Portuguese File**

Edit `src/locales/pt.js`:
```javascript
export const pt = {
  newSection: {
    title: "Minha Nova Seção",
    subtitle: "Esta é uma nova seção",
    description: "Alguma descrição aqui",
  },
};
```

### **Step 3: Use in Component**

```jsx
const NewSection = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t('newSection.title')}</h2>
      <p>{t('newSection.subtitle')}</p>
      <p>{t('newSection.description')}</p>
    </section>
  );
};
```

---

## 🎨 Customizing the Language Toggle

### **Current Implementation**

- Flag emoji + language code (PT/EN)
- Mobile: Shows only flag
- Desktop: Shows flag + code

### **To Customize**

Edit `src/components/common/LanguageToggle.jsx`:

```jsx
// Change icons/text
<span className="language-toggle__flag">
  {language === 'en' ? '🇧🇷' : '🇺🇸'}  // Swap flags if needed
</span>
<span className="language-toggle__text">
  {language === 'en' ? 'PT' : 'EN'}      // Change text labels
</span>
```

### **Styling**

Edit `src/components/common/LanguageToggle.css`:
```css
.language-toggle {
  /* Customize button appearance */
  padding: var(--spacing-sm);
  font-size: var(--font-size-sm);
}
```

---

## 🔧 Advanced Configuration

### **Accessing Current Language**

```jsx
import { useLanguage } from '../context/LanguageContext';

const MyComponent = () => {
  const { language, toggleLanguage, setLanguage } = useLanguage();

  // language: 'en' or 'pt'
  // toggleLanguage: function to switch languages
  // setLanguage: function to set specific language

  return (
    <div>
      <p>Current language: {language}</p>
      <button onClick={toggleLanguage}>Switch</button>
      <button onClick={() => setLanguage('pt')}>Force Portuguese</button>
    </div>
  );
};
```

### **Language-Specific Content**

```jsx
const MyComponent = () => {
  const { language } = useLanguage();

  return (
    <div>
      {language === 'pt' ? (
        <img src="/images/br-specific.jpg" alt="Brasil" />
      ) : (
        <img src="/images/us-specific.jpg" alt="USA" />
      )}
    </div>
  );
};
```

---

## 📊 Translation Coverage

| Section | English | Portuguese | Status |
|---------|---------|------------|--------|
| Navigation | ✅ | ✅ | Complete |
| Home | ✅ | ✅ | Complete |
| About | ✅ | ✅ | Complete |
| Skills | ⚠️ | ⚠️ | Labels only* |
| Services | ✅ | ✅ | Complete |
| Portfolio | ✅ | ✅ | Complete |
| Contact | ✅ | ✅ | Complete |

*Skills section uses dynamic content - add translations if needed in `Skills.jsx`

---

## 🐛 Troubleshooting

### **Translations Not Showing**

1. Check language is set correctly:
   ```javascript
   console.log(localStorage.getItem('portfolio-language'));
   ```

2. Verify translation key exists:
   ```javascript
   import { translations } from './locales';
   console.log(translations.en.nav.home);
   console.log(translations.pt.nav.home);
   ```

3. Check console for errors (missing keys return the key itself)

### **Language Not Persisting**

- Clear browser localStorage
- Check if localStorage is enabled
- Verify browser allows localStorage for localhost

### **Wrong Language Detected**

Change detection in `LanguageContext.jsx`:
```javascript
const browserLang = navigator.language || navigator.userLanguage;

// Customize detection logic
if (browserLang.startsWith('pt')) {
  return 'pt';
} else if (browserLang.startsWith('es')) {
  return 'es';  // Add Spanish support
}
```

---

## 🚀 Adding More Languages

### **Step 1: Create Translation File**

Create `src/locales/es.js` (Spanish example):
```javascript
export const es = {
  nav: {
    home: "Inicio",
    about: "Acerca",
    // ... add all keys
  },
  // ... complete translation
};
```

### **Step 2: Register Language**

Edit `src/locales/index.js`:
```javascript
import { en } from './en';
import { pt } from './pt';
import { es } from './es';  // Add import

export const translations = {
  en,
  pt,
  es,  // Add to export
};
```

### **Step 3: Update Context**

Edit `LanguageContext.jsx`:
```javascript
const [language, setLanguage] = useState(() => {
  const saved = localStorage.getItem('portfolio-language');
  if (saved && ['en', 'pt', 'es'].includes(saved)) {  // Add 'es'
    return saved;
  }

  const browserLang = navigator.language || navigator.userLanguage;

  if (browserLang.startsWith('pt')) return 'pt';
  if (browserLang.startsWith('es')) return 'es';  // Add detection

  return 'en';
});
```

### **Step 4: Update Toggle**

Edit `LanguageToggle.jsx` to cycle through 3+ languages:
```javascript
const cycleLanguage = () => {
  const languages = ['en', 'pt', 'es'];
  const currentIndex = languages.indexOf(language);
  const nextIndex = (currentIndex + 1) % languages.length;
  setLanguage(languages[nextIndex]);
};
```

---

## 📱 Accessibility

### **Language Attribute**

The `<html>` tag automatically updates with the correct `lang` attribute:
```html
<html lang="en">  <!-- or lang="pt" -->
```

This helps:
- Screen readers pronounce correctly
- Search engines index properly
- Browser translation tools work better

### **ARIA Labels**

The language toggle includes proper ARIA labels:
```jsx
<button
  aria-label="Switch to Portuguese"
  title="Switch to Portuguese"
>
```

---

## 🎯 Best Practices

### **1. Keep Keys Organized**

Group related translations:
```javascript
{
  contact: {
    form: {
      name: "Your Name",
      email: "Your Email",
      submit: "Send Message"
    },
    info: {
      phone: "Phone",
      email: "Email"
    }
  }
}
```

### **2. Use Descriptive Keys**

❌ Bad: `t('text1')`, `t('btn')`
✅ Good: `t('contact.formName')`, `t('portfolio.viewProject')`

### **3. Handle Plurals**

For count-based translations:
```javascript
{
  projects: {
    one: "1 project",
    many: "{{count}} projects"
  }
}
```

### **4. Keep Translations Short**

Mobile screens have limited space - keep translations concise.

---

## 🔄 Migration Guide

If you add new content later:

1. **Add to English first** (`en.js`)
2. **Add Portuguese translation** (`pt.js`)
3. **Update component** to use `t('key')`
4. **Test both languages** using the toggle
5. **Verify localStorage** persistence

---

## 📚 Resources

- **React i18n Best Practices**: https://react.i18next.com/
- **Portuguese Translation Tools**: https://translate.google.com/
- **Accessibility Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/

---

**Last Updated:** October 2025
**Languages Supported:** English (EN), Portuguese (PT)
**Auto-Detection:** ✅ Enabled
**Persistence:** ✅ localStorage
