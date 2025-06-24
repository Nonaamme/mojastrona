import React from 'react';

// Komponent ContactIcon
function ContactIcon({ label, icon, info }) {
  return (
    <div style={{ textAlign: 'center', cursor: 'default' }} aria-label={label}>
      <div style={{
        fontSize: '1.8rem',
        marginBottom: '0.3rem',
        filter: 'drop-shadow(0 0 3px #b0bec5)' // subtelny cień
      }}>
        {icon}
      </div>
      <div style={{ fontSize: '0.9rem', color: '#b0bec5' }}>
        {info}
      </div>
    </div>
  );
}

// Komponent Footer
export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #263238, #37474f)', // ciemny styl barbershopowy
      padding: '2rem 1rem',
      textAlign: 'center',
      color: '#eceff1'
    }}>
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <p style={{ margin: '0 0 1rem', fontWeight: '600', fontSize: '1.1rem' }}>
          © 2025 Salon Fryzjerski <strong>„Barbershop Classic Style”</strong>
        </p>
        <p style={{ margin: '0 0 1.5rem', fontSize: '0.95rem' }}>
          ul. Klasyczna 7, 00-420 Warszawa
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2.5rem',
          fontSize: '1.1rem',
          flexWrap: 'wrap'
        }}>
          <ContactIcon label="Telefon" icon="📞" info="+48 987 654 321" />
          <ContactIcon label="Email" icon="📧" info="kontakt@classicbarber.pl" />
          <ContactIcon label="Godziny" icon="🕒" info="Pn–Sb: 10:00 – 19:00" />
        </div>
      </div>
    </footer>
  );
}
