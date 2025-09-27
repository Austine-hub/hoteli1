import React from 'react';
import styles from './Coffee.module.css';

const Coffee: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <img 
            src="/api/placeholder/600/400" 
            alt="The Coffee House interior" 
            className={styles.mainImage}
          />
          <div className={styles.imageOverlay}>
            <div className={styles.coffeeLogo}>
              <span className={styles.logoText}>THE</span>
              <span className={styles.logoText}>COFFEE</span>
              <span className={styles.logoText}>HOUSE</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.infoSection}>
        <div className={styles.content}>
          <h1 className={styles.title}>Grab & Go</h1>
          <p className={styles.subtitle}>Coffee | Bakery | Restaurant</p>
          
          <div className={styles.locationInfo}>
            <div className={styles.locationIcon}>📍</div>
            <span className={styles.address}>GLV 1 | 74 UN CRESCENT ROAD</span>
          </div>
          
          <div className={styles.separator}></div>
          
          <p className={styles.description}>
            Savor fresh, delicious meals and snacks crafted for life on 
            the go — where convenience meets quality, and every bite 
            delivers on taste without compromise.
          </p>
          
          <div className={styles.operatingHours}>
            <h3 className={styles.hoursTitle}>Open Everyday</h3>
            <p className={styles.hoursTime}>6:30am to 10:00pm</p>
          </div>
          
          <div className={styles.contactButtons}>
            <button className={styles.callButton}>
              CALL +254 111200200
            </button>
            <button className={styles.callButton}>
              CALL +254 100200200
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;