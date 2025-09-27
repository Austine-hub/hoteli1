import React from "react";
import styles from "./Hero.module.css";

// correct way — import the image
import heroBanner from "../assets/heroBanner.png";

const Hero: React.FC = () => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1 className={styles.title}>Dine with Elegance</h1>
        <p className={styles.subtitle}>
          Experience gastronomic delights in a refined setting
        </p>
        <a href="#dine" className={styles.ctaButton}>
          Explore Dine
        </a>
      </div>
    </section>
  );
};

export default Hero;
