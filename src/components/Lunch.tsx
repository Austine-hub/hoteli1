import React from 'react';
import styles from './Lunch.module.css';

const Lunch: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg viewBox="0 0 100 100" className={styles.logoSvg}>
              <circle cx="50" cy="30" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M35 45 Q50 35 65 45" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M30 55 Q50 45 70 55" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M35 65 Q50 55 65 65" fill="none" stroke="currentColor" strokeWidth="2"/>
              <line x1="50" y1="70" x2="50" y2="85" stroke="currentColor" strokeWidth="2"/>
              <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          <div className={styles.logoText}>
            <h1>Forest Fork</h1>
            <div className={styles.locationInfo}>
              <span className={styles.locationIcon}>📍</span>
              <span>LV 3 | 5TH AVE, MUTHAIGA HEIGHTS</span>
            </div>
          </div>
        </div>

        <div className={styles.description}>
          <p>
            Every dish tells a story. Crafted with bold, modern flavors 
            using grass-fed beef, free-range chicken, and seasonal local 
            produce, all sustainably sourced from Kenyan farms. From 
            smoky grilled meats to vibrant plant-based creations, each 
            bite is a fresh take on Kenya's rich culinary heritage.
          </p>
        </div>

        <div className={styles.hours}>
          <h3>Open Everyday</h3>
          <p>6:30am to 10:00pm</p>
        </div>

        <div className={styles.contactButtons}>
          <button className={styles.phoneButton}>
            CALL +254 111200200
          </button>
          <button className={styles.phoneButton}>
            CALL +254 100200300
          </button>
        </div>
      </div>

      <div className={styles.rightPanel}>
        <div className={styles.restaurantImage}>
          <div className={styles.wallArt}>
            <div className={styles.artFrame}>LATTE</div>
            <div className={styles.artFrame}>FRESH BREW</div>
            <div className={styles.artFrame}>
              COFFEE<br/>
              BEFORE<br/>
              TALKIE
            </div>
            <div className={styles.artFrame}>
              Coffee is a<br/>
              language in<br/>
              itself
            </div>
          </div>

          <div className={styles.diningArea}>
            <div className={styles.tables}>
              <div className={styles.table}>
                <div className={styles.chair}></div>
                <div className={styles.chair}></div>
              </div>
              <div className={styles.table}>
                <div className={styles.chair}></div>
                <div className={styles.chair}></div>
              </div>
            </div>
          </div>

          <div className={styles.counter}>
            <div className={styles.counterTop}>
              <div className={styles.coffeeMachine}></div>
              <div className={styles.register}></div>
              <div className={styles.display}></div>
            </div>
            <div className={styles.counterBase}>
              <div className={styles.counterLogo}>
                <div className={styles.counterLogoIcon}>
                  <svg viewBox="0 0 50 50" className={styles.counterLogoSvg}>
                    <circle cx="25" cy="15" r="4" fill="currentColor"/>
                    <path d="M20 22 Q25 18 30 22" fill="none" stroke="currentColor" strokeWidth="1"/>
                    <path d="M18 28 Q25 23 32 28" fill="none" stroke="currentColor" strokeWidth="1"/>
                    <path d="M20 34 Q25 29 30 34" fill="none" stroke="currentColor" strokeWidth="1"/>
                    <circle cx="25" cy="25" r="12" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                </div>
                <span>FOREST FORK</span>
              </div>
            </div>
          </div>

          <div className={styles.floorPattern}></div>
        </div>
      </div>
    </div>
  );
};

export default Lunch;