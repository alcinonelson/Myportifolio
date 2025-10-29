import React from "react";
import Section from "../common/Section";
import Button from "../common/Button";
import { useTranslation } from "../../hooks/useTranslation";
import "./About.css";

const About = () => {
  const { t, language } = useTranslation();

  return (
    <Section id="about" title={t('about.title')} subtitle={t('about.subtitle')}>
      <div className="about__content">
        <div className="about__data">
          <p className="about__description">
            {t('about.description')}
          </p>

          <div className="about__info">
            <div className="about__info-item">
              <span className="about__info-title">{t('about.experience')}</span>
              <span className="about__info-subtitle">{t('about.experienceValue')}</span>
            </div>

            <div className="about__info-item">
              <span className="about__info-title">{t('about.projects')}</span>
              <span className="about__info-subtitle">{t('about.projectsValue')}</span>
            </div>

            <div className="about__info-item">
              <span className="about__info-title">{t('about.clients')}</span>
              <span className="about__info-subtitle">{t('about.clientsValue')}</span>
            </div>
          </div>

          <div className="about__buttons">
            <Button href="#portfolio" variant="primary" size="lg">
              {t('about.cta')}
            </Button>

            <a
              href={language === 'en' ? '/CV-EN.pdf' : '/CV-PT.pdf'}
              download={language === 'en' ? 'Alcino-Nelson-CV-EN.pdf' : 'Alcino-Nelson-CV-PT.pdf'}
              className="button button--ghost button--lg"
            >
              <i className="uil uil-download-alt button__icon"></i>
              {t('common.downloadCV')}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
