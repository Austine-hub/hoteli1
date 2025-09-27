import React from "react";
import styles from "./Lunch.module.css";

// ✅ Import icons/images from assets
import forestForkLogo from "../assets/icons/forest-fork-logo.png";
import locationIcon from "../assets/icons/location.png";
import counterLogo from "../assets/icons/counter-logo.png";

const Lunch: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* LEFT PANEL */}
      <div className={styles.leftPanel}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <img
              src={forestForkLogo}
              alt="Forest Fork Logo"
              className={styles.logoImage}
            />
          </div>
          <div className={styles.logoText}>
            <h1>Forest Fork</h1>
            <div className={styles.locationInfo}>
              <img
                src={locationIcon}
                alt="Location Icon"
                className={styles.locationIcon}
              />
              <span>LV 3 | 5TH AVE, MUTHAIGA HEIGHTS</span>
            </div>
          </div>
        </div>

        <div className={styles.description}>
          <p>
            Every dish tells a story. Crafted with bold, modern flavors using
            grass-fed beef, free-range chicken, and seasonal local produce, all
            sustainably sourced from Kenyan farms. From smoky grilled meats to
            vibrant plant-based creations, each bite is a fresh take on Kenya's
            rich culinary heritage.
          </p>
        </div>

        <div className={styles.hours}>
          <h3>Open Everyday</h3>
          <p>6:30am to 10:00pm</p>
        </div>

        <div className={styles.contactButtons}>
          <button className={styles.phoneButton}>CALL +254 111200200</button>
          <button className={styles.phoneButton}>CALL +254 100200300</button>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className={styles.rightPanel}>
        <div className={styles.restaurantImage}>
          {/* Wall Art */}
          <div className={styles.wallArt}>
            <div className={styles.artFrame}>LATTE</div>
            <div className={styles.artFrame}>FRESH BREW</div>
            <div className={styles.artFrame}>
              COFFEE <br />
              BEFORE <br />
              TALKIE
            </div>
            <div className={styles.artFrame}>
              Coffee is a <br />
              language in <br />
              itself
            </div>
          </div>

          {/* Dining Area */}
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

          {/* Counter */}
          <div className={styles.counter}>
            <div className={styles.counterTop}>
              <div className={styles.coffeeMachine}></div>
              <div className={styles.register}></div>
              <div className={styles.display}></div>
            </div>
            <div className={styles.counterBase}>
              <div className={styles.counterLogo}>
                <img
                  src={counterLogo}
                  alt="Counter Logo"
                  className={styles.counterLogoImage}
                />
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
