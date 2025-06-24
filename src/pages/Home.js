import React, { useState } from 'react';
import './Home.css'; // Jeśli masz osobny plik ze stylami

export default function Home() {
  const images = [
    '/img/barber1.jpg',
    '/img/barber2.jpg',
    '/img/barber3.jpg',
    '/img/barber4.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <main>
      {/* Sekcja powitalna + slider */}
      <div className="hero-container">
        <div className="slider-container">
          <button className="slider-btn prev-btn" onClick={prevImage} aria-label="Poprzednie zdjęcie">
            {'<'}
          </button>
          <img
            src={images[currentIndex]}
            alt={`img/barber${currentIndex + 1}`}
            className="slider-image"
          />
          <button className="slider-btn next-btn" onClick={nextImage} aria-label="Następne zdjęcie">
            {'>'}
          </button>
        </div>

        <div className="hero-text">
          <h1>
            Witamy w <span className="highlight">salonie „Classic Style”</span> ✂️
          </h1>
          <p>
            Oferujemy stylowe strzyżenie, klasyczne golenie oraz indywidualne podejście do każdego klienta.
            Dołącz do grona zadowolonych mężczyzn!
          </p>
          <a href="/fryzjerzy" className="btn-primary">Poznaj naszych fryzjerów</a>
        </div>
      </div>

      {/* Sekcja usług */}
      <section className="services-section">
        <h2 className="section-title">ZAKRES USŁUG</h2>
        <div className="services-cards">
          <div className="card">
            <h3>Strzyżenie męskie</h3>
            <p>Precyzyjne cięcia, modne fryzury i indywidualne doradztwo w zakresie stylizacji włosów.</p>
          </div>
          <div className="card">
            <h3>Golenie brzytwą</h3>
            <p>Tradycyjne golenie na mokro z gorącym ręcznikiem – relaks i perfekcja w jednym.</p>
          </div>
          <div className="card">
            <h3>Trymowanie brody</h3>
            <p>Modelowanie brody zgodnie z rysami twarzy – profesjonalnie i stylowo.</p>
          </div>
          <div className="card">
            <h3>Pielęgnacja</h3>
            <p>Odżywcze zabiegi na włosy i skórę głowy, abyś wyglądał i czuł się najlepiej.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
