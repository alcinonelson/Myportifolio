import React, { useState } from "react";
import Section from "../common/Section";
import Button from "../common/Button";
import { useTranslation } from "../../hooks/useTranslation";
import "./Contact.css";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create mailto link with form data
    const mailtoLink = `mailto:alcino.maido@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open default email client
    window.location.href = mailtoLink;

    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: "uil-phone",
      title: t('contact.phone'),
      info: "+258 86 579 8615",
      link: "tel:+258865798615",
    },
    {
      icon: "uil-envelope",
      title: t('contact.email'),
      info: "alcino.maido@gmail.com",
      link: "mailto:alcino.maido@gmail.com",
    },
    {
      icon: "uil-map-pin",
      title: t('contact.location'),
      info: "Maputo, Mozambique",
      link: "#",
    },
  ];

  return (
    <Section id="contact" title={t('contact.title')} subtitle={t('contact.subtitle')}>
      <div className="contact__content grid">
        <div className="contact__info">
          <h3 className="contact__info-title">{t('contact.infoTitle')}</h3>
          <p className="contact__info-description">
            {t('contact.infoDescription')}
          </p>

          <div className="contact__info-items">
            {contactInfo.map((item) => (
              <a
                key={item.title}
                href={item.link}
                className="contact__info-item"
                target={item.title === "Location" ? undefined : "_blank"}
                rel={item.title === "Location" ? undefined : "noopener noreferrer"}
              >
                <div className="contact__info-icon">
                  <i className={`uil ${item.icon}`}></i>
                </div>
                <div className="contact__info-text">
                  <span className="contact__info-label">{item.title}</span>
                  <span className="contact__info-value">{item.info}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="contact__social">
            <a href="#" className="contact__social-link" aria-label="LinkedIn">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="#" className="contact__social-link" aria-label="GitHub">
              <i className="bx bxl-github"></i>
            </a>
            <a href="#" className="contact__social-link" aria-label="Twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="contact__social-link" aria-label="CodePen">
              <i className="bx bxl-codepen"></i>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact__form">
          {submitted && (
            <div className="contact__success">
              {t('contact.formSuccess')}
            </div>
          )}

          <div className="form__group">
            <input
              type="text"
              name="name"
              placeholder={t('contact.formName')}
              value={formData.name}
              onChange={handleChange}
              required
              className="form__input"
            />
          </div>

          <div className="form__group">
            <input
              type="email"
              name="email"
              placeholder={t('contact.formEmail')}
              value={formData.email}
              onChange={handleChange}
              required
              className="form__input"
            />
          </div>

          <div className="form__group">
            <input
              type="text"
              name="subject"
              placeholder={t('contact.formSubject')}
              value={formData.subject}
              onChange={handleChange}
              required
              className="form__input"
            />
          </div>

          <div className="form__group">
            <textarea
              name="message"
              placeholder={t('contact.formMessage')}
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="form__input form__textarea"
            ></textarea>
          </div>

          <Button type="submit" variant="primary" size="lg">
            {t('contact.formSubmit')}
          </Button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
