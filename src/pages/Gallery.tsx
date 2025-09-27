import React, { useState, useCallback, useEffect } from "react";
import styles from "./Gallery.module.css";

// ✅ Import images from assets/images
import img1 from "../assets/images/breako1.png";
import img2 from "../assets/images/breako2.png";
import img3 from "../assets/images/breako3.png";
import img4 from "../assets/images/breako4.png";
import img5 from "../assets/images/breako5.png";
import img6 from "../assets/images/breako6.png";
import img7 from "../assets/images/breako7.png";
import img8 from "../assets/images/breako8.png";
import img9 from "../assets/images/breako9.png";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const Gallery: React.FC = () => {
  const galleryImages: GalleryImage[] = [
    { id: 1, src: img1, alt: "Samosa with dipping sauce and salad" },
    { id: 2, src: img2, alt: "Fish and chips with sauce" },
    { id: 3, src: img3, alt: "Calamari rings with ranch dressing" },
    { id: 4, src: img4, alt: "Grilled meat with vegetables and potatoes" },
    { id: 5, src: img5, alt: "Mixed grill platter with soup" },
    { id: 6, src: img6, alt: "Grilled fish with herbs and sauce" },
    { id: 7, src: img7, alt: "Lamb chops with chips and vegetables" },
    { id: 8, src: img8, alt: "Lamb chops with chips and vegetables" },
    { id: 9, src: img9, alt: "Lamb chops with chips and vegetables" },
  ];

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openModal = (index: number) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);

  const showNext = useCallback(() => {
    if (currentIndex === null) return;
    setCurrentIndex((prev) => (prev! + 1) % galleryImages.length);
  }, [currentIndex, galleryImages.length]);

  const showPrev = useCallback(() => {
    if (currentIndex === null) return;
    setCurrentIndex((prev) =>
      prev! === 0 ? galleryImages.length - 1 : prev! - 1
    );
  }, [currentIndex, galleryImages.length]);

  // ✅ Keyboard navigation (Esc, ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex, showNext, showPrev]);

  return (
    <div className={styles.galleryContainer}>
      {/* Header */}
      <div className={styles.galleryHeader}>
        <div className={styles.headerIcon}></div>
        <h2 className={styles.galleryTitle}>Gallery</h2>
      </div>

      {/* Grid */}
      <div className={styles.galleryGrid}>
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className={`${styles.galleryItem} ${
              index === 0
                ? styles.large
                : index <= 3
                ? styles.medium
                : styles.small
            }`}
            onClick={() => openModal(index)}
          >
            <img src={image.src} alt={image.alt} className={styles.galleryImage} />
            <div className={styles.imageOverlay}>
              <div className={styles.zoomIcon}>🔍</div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {currentIndex !== null && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              ×
            </button>
            <button className={styles.prevButton} onClick={showPrev}>
              ‹
            </button>
            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className={styles.modalImage}
            />
            <button className={styles.nextButton} onClick={showNext}>
              ›
            </button>
            <p className={styles.modalCaption}>
              {galleryImages[currentIndex].alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
