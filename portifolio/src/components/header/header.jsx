import React, { useState, useEffect } from "react";
import "./header.css";
import ThemeToggle from "../common/ThemeToggle";
import LanguageToggle from "../common/LanguageToggle";
import { useTranslation } from "../../hooks/useTranslation";

const Header = () => {
  const { t } = useTranslation();
  /*================= Toggle Menu =================*/
  const [toggle, showMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  // Handle menu close on link click
  const handleLinkClick = (href) => {
    setActiveLink(href);
    showMenu(false);
  };

  // Handle menu close on ESC key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        showMenu(false);
      }
    };

    if (toggle) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [toggle]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navMenu = document.querySelector(".nav__menu");
      const navToggle = document.querySelector(".nav__toggle");

      if (
        navMenu &&
        !navMenu.contains(event.target) &&
        !navToggle.contains(event.target) &&
        toggle
      ) {
        showMenu(false);
      }
    };

    if (toggle) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [toggle]);

  // Detect active section using Intersection Observer
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { href: "#home", icon: "uil-estate", label: t('nav.home') },
    { href: "#about", icon: "uil-user", label: t('nav.about') },
    { href: "#skills", icon: "uil-file-alt", label: t('nav.skills') },
    { href: "#services", icon: "uil-briefcase-alt", label: t('nav.services') },
    { href: "#portfolio", icon: "uil-scenery", label: t('nav.portfolio') },
    { href: "#contact", icon: "uil-message", label: t('nav.contact') },
  ];

  return (
    <header id="header" className="header">
      <nav className="nav container">
        <a href="#" className="nav__logo" onClick={(e) => {
          e.preventDefault();
          handleLinkClick("#home");
        }}>
          Alcino
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {navLinks.map((link) => (
              <li key={link.href} className="nav__item">
                <a
                  href={link.href}
                  className={`nav__link ${
                    activeLink === link.href ? "active-link" : ""
                  }`}
                  onClick={() => handleLinkClick(link.href)}
                  aria-current={activeLink === link.href ? "page" : undefined}
                >
                  <i className={`uil ${link.icon} nav__icon`}></i>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <button
            className="nav__close"
            aria-label="Close menu"
            onClick={() => showMenu(false)}
          >
            <i className="uil uil-times"></i>
          </button>
        </div>

        <div className="nav__actions">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <button
          className="nav__toggle"
          aria-label="Open menu"
          aria-expanded={toggle}
          onClick={() => showMenu(!toggle)}
        >
          <i className="uil uil-apps"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;