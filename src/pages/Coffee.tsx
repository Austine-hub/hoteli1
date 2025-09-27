import React, { useState, useEffect, useRef } from "react";
import styles from "./Coffee.module.css";

// Import placeholder images from assets
import img1 from "../assets/pics/coffee1.png";
import img2 from "../assets/pics/coffee2.png";
import img3 from "../assets/pics/coffee3.png";
import img4 from "../assets/pics/coffee4.png";
import img5 from "../assets/pics/coffee5.png";

const Coffee: React.FC = () => {
  const images = [img1, img2, img3, img4, img5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Touch Events (Swipe)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;

      if (distance > 50) {
        // Swiped left → next
        handleNext();
      } else if (distance < -50) {
        // Swiped right → prev
        handlePrev();
      }
    }

    // Reset
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className={styles.container}>
      {/* Image Carousel Section */}
      <div
        className={styles.imageSection}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.carousel}>
          <button className={styles.arrow} onClick={handlePrev}>
            &#8592;
          </button>

          <div className={styles.imageContainer}>
            <img
              src={images[currentIndex]}
              alt={`Coffee interior ${currentIndex + 1}`}
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

          <button className={styles.arrow} onClick={handleNext}>
            &#8594;
          </button>
        </div>

        {/* Dots Indicator */}
        <div className={styles.dots}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.active : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Info Section */}
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
            Savor fresh, delicious meals and snacks crafted for life on the go
            — where convenience meets quality, and every bite delivers on taste
            without compromise.
          </p>

          <div className={styles.operatingHours}>
            <h3 className={styles.hoursTitle}>Open Everyday</h3>
            <p className={styles.hoursTime}>6:30am to 10:00pm</p>
          </div>

          <div className={styles.contactButtons}>
            <button className={styles.callButton}>CALL +254 111200200</button>
            <button className={styles.callButton}>CALL +254 100200200</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
