import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Awards and Certifications */}
        <section className={styles.awards}>
          <div className={styles.awardBadge}>
            <span className={styles.weAreOn}>WE ARE ON</span>
            <div className={styles.tripadvisorLogo}>
              <div className={styles.owl}>
                <div className={styles.eyes}>
                  <span className={styles.eye} />
                  <span className={styles.eye} />
                </div>
              </div>
              <span className={styles.tripadvisorText}>Tripadvisor</span>
            </div>
          </div>

          <div className={styles.traAccredited}>
            <div className={styles.traLogo}>TRA</div>
            <div className={styles.traText}>
              <span>TOURISM</span>
              <span>REGULATORY</span>
              <span>AUTHORITY</span>
              <span className={styles.accredited}>ACCREDITED</span>
            </div>
          </div>

          <div className={styles.bookingAward}>
            <span className={styles.bookingLogo}>Booking.com</span>
            <span className={styles.bookingText}>
              Traveller Review Awards 2025
            </span>
          </div>
        </section>

        {/* Locations */}
        <section className={styles.locations}>
          <address className={styles.location}>
            <h3 className={styles.title}>GLV 1</h3>
            <p>
              74 UN Crescent Road<br />
              Gigiri Drive | Gigiri | Nairobi, Ke
            </p>
            <a href="tel:+254111200200" className={styles.phone}>
              Tel: +254 111 200 200
            </a>
          </address>

          <address className={styles.location}>
            <h3 className={styles.title}>GLV 2</h3>
            <p>
              238 Gigiri Drive | Gigiri |<br />
              Nairobi, Ke
            </p>
            <a href="tel:+254100200200" className={styles.phone}>
              Tel: +254 100 200 200
            </a>
          </address>

          <address className={styles.location}>
            <h3 className={styles.title}>LV 3</h3>
            <p>
              6th Avenue Parklands,<br />
              Muthaiga Heights | Nairobi, Ke
            </p>
            <a href="tel:+254116200200" className={styles.phone}>
              Tel: +254 116 200 200
            </a>
          </address>
        </section>

        {/* Social Media + Copyright */}
        <section className={styles.bottomBar}>
          <nav className={styles.social}>
            <a
              href="#"
              className={styles.link}
              aria-label="Instagram"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="#"
              className={styles.link}
              aria-label="Twitter/X"
              rel="noopener noreferrer"
            >
              X/Twitter
            </a>
            <a
              href="#"
              className={styles.link}
              aria-label="Facebook"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </nav>

          <div className={styles.copyright}>
            <p>b.152</p>
            <p>&copy; 2025 Gigiri Lion Villas</p>
          </div>
        </section>
      </div>

      {/* Chat Widget Placeholder */}
      <div className={styles.chatWidget}>
        <button className={styles.chatButton} aria-label="Open chat">
          💬
        </button>
      </div>
    </footer>
  );
};

export default Footer;
