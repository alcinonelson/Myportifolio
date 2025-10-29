import { useLanguage } from '../../context/LanguageContext';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === 'en' ? 'Portugal Portuguese' : 'UK English'}`}
      title={`Switch to ${language === 'en' ? 'Portugal Portuguese' : 'UK English'}`}
    >
      <span className="language-toggle__text">
        {language === 'en' ? 'PT' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageToggle;
