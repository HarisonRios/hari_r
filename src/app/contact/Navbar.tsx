"use client"
import React, { useLayoutEffect, useRef, useState } from 'react';
import './Navbar.scss';

export default function Navbar(){
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const items = [
    {
      label: "/",
      bgColor: "rgba(13, 7, 22, 0.9)",
      textColor: "#fff",
      links: [
        { label: "Main Page", href: "/", ariaLabel: "Go to main page" },
      ]
    },
    {
      label: "Projects", 
      bgColor: "rgba(23, 13, 39, 0.9)",
      textColor: "#fff",
      links: [
        { label: "All Projects", href: "/projects", ariaLabel: "View all projects" },
      ]
    },
    {
      label: "Contact",
      bgColor: "rgba(39, 30, 55, 0.9)", 
      textColor: "#fff",
      links: [
        { label: "Get in Touch", href: "/contact", ariaLabel: "Contact page" },
      ]
    }
  ];

  const calculateHeight = () => {
    const isMobile = window.innerWidth <= 768;
    return isMobile ? 320 : 280;
  };

  const toggleMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
    setIsExpanded(!isExpanded);
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div className="card-nav-container">
      <nav 
        ref={navRef} 
        className={`card-nav ${isExpanded ? 'open' : ''}`}
        style={{
          height: isExpanded ? calculateHeight() : '60px',
          transition: 'height 0.4s cubic-bezier(0.215, 0.610, 0.355, 1.000)'
        }}
      >
        {/* Top Bar */}
        <div className="card-nav-top">
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>

          <div className="logo-container">
            <img src="/logo2.png" alt="Logo" className="logo" />
          </div>
        </div>

        {/* Menu Content */}
        <div className={`card-nav-content ${isExpanded ? 'visible' : ''}`}>
          {items.map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card"
              ref={setCardRef(idx)}
              style={{ 
                backgroundColor: item.bgColor, 
                color: item.textColor,
                transform: isExpanded ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                opacity: isExpanded ? 1 : 0,
                transition: `all 0.4s cubic-bezier(0.215, 0.610, 0.355, 1.000) ${idx * 0.08}s`
              }}
            >
              <div className="nav-card-label">{item.label}</div>
              <div className="nav-card-links">
                {item.links?.map((link, i) => (
                  <a key={`${link.label}-${i}`} className="nav-card-link" href={link.href} aria-label={link.ariaLabel}>
                    <span className="arrow">↗</span>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

