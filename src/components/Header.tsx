import React, { useState, useEffect, useCallback, useMemo } from "react";
import styles from "./Header.module.css";

// correct way — import the image
import logo from "../assets/logo.png";


// Types
interface NavLink {
  href: string;
  label: string;
}

// Constants
const NAV_LINKS: readonly NavLink[] = [
  { href: "#glv1", label: "GLV1" },
  { href: "#glv2", label: "GLV2" },
  { href: "#lv3", label: "LV3" },
  { href: "#dine", label: "DINE" },
  { href: "#events", label: "EVENTS" },
  { href: "#wellness", label: "WELLNESS" },
  { href: "#gallery", label: "GALLERY" },
  { href: "#offers", label: "OFFERS" },
] as const;

const SCROLL_THRESHOLD = 20;
const BOOK_NOW_HREF = "#book";
const LOGO_ALT = "GLV Logo";

// Custom hooks
const useScrollDetection = (threshold: number = SCROLL_THRESHOLD) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
};

const useMobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  };
};

// Components
interface NavItemProps {
  href: string;
  label: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavItem: React.FC<NavItemProps> = ({ 
  href, 
  label, 
  className = styles.navLink, 
  onClick 
}) => (
  <a 
    href={href} 
    className={className}
    onClick={onClick}
    role="menuitem"
  >
    {label}
  </a>
);

interface BookButtonProps {
  href: string;
  className: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const BookButton: React.FC<BookButtonProps> = ({ 
  href, 
  className, 
  children, 
  onClick 
}) => (
  <a 
    href={href} 
    className={className}
    onClick={onClick}
    role="button"
    aria-label="Book your reservation"
  >
    {children}
  </a>
);

// Main Header Component
const Header: React.FC = () => {
  const isScrolled = useScrollDetection();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu();

  // Memoize class names for performance
  const headerClassName = useMemo(() => 
    `${styles.header} ${isScrolled ? styles.scrolled : ""}`.trim(),
    [isScrolled]
  );

  const mobileToggleClassName = useMemo(() => 
    `${styles.mobileToggle} ${isMobileMenuOpen ? styles.active : ""}`.trim(),
    [isMobileMenuOpen]
  );

  const mobileMenuClassName = useMemo(() => 
    `${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ""}`.trim(),
    [isMobileMenuOpen]
  );

  const handleNavClick = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    closeMobileMenu();
    
    // Smooth scroll behavior for anchor links
    const href = event.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      event.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }, [closeMobileMenu]);

  return (
    <header 
      className={headerClassName}
      role="banner"
    >
      <div className={styles.container}>
        {/* Logo */}
        <a 
          href="/" 
          className={styles.logo} 
          aria-label="Go to homepage"
          onClick={closeMobileMenu}
        >
            <img 
            src={logo} 
            alt={LOGO_ALT}
            className={styles.logoImage}
            loading="eager"
            decoding="async"
            />

        </a>

        {/* Desktop Navigation */}
        <nav 
          className={styles.nav} 
          role="navigation" 
          aria-label="Main navigation"
        >
          <ul className={styles.navList} role="menubar">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href} className={styles.navItem} role="none">
                <NavItem 
                  href={href} 
                  label={label}
                  onClick={handleNavClick}
                />
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Book Button */}
        <div className={styles.bookNow}>
          <BookButton 
            href={BOOK_NOW_HREF} 
            className={styles.bookButton}
            onClick={handleNavClick}
          >
            BOOK NOW
          </BookButton>
        </div>

        {/* Mobile Toggle */}
        <button
          className={mobileToggleClassName}
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          type="button"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={mobileMenuClassName}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-heading"
        aria-hidden={!isMobileMenuOpen}
      >
        <nav role="navigation" aria-label="Mobile navigation">
          <h2 id="mobile-menu-heading" className="sr-only">
            Mobile Navigation Menu
          </h2>
          <ul className={styles.mobileNavList} role="menubar">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href} className={styles.mobileNavItem} role="none">
                <NavItem
                  href={href}
                  label={label}
                  className={styles.mobileNavLink}
                  onClick={handleNavClick}
                />
              </li>
            ))}
            <li className={styles.mobileNavItem} role="none">
              <BookButton 
                href={BOOK_NOW_HREF} 
                className={styles.mobileBookButton}
                onClick={handleNavClick}
              >
                BOOK NOW
              </BookButton>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
