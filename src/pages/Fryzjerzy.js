// Fryzjerzy.jsx
import React, { useEffect, useState } from 'react';
import FryzjerCard from '../FryzjerCard.js';
export default function Fryzjerzy() {
  const [isLoading, setLoading] = useState(false);
  const [fryzjerzy, setFryzjerzy] = useState([]);
  const [blad, setBlad] = useState('');
  
  
  useEffect(() => {
    fetch('http://localhost/api/getFryzjerzy.php')
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        return response.json();
      })
      .then((data) => {
        setFryzjerzy(data);
        setLoading(false);
      })
      .catch((error) => {
        setBlad(error.message);
        setLoading(false);
      });
  }, []);


  return (
    <div style={{ padding: '2em' }}>
  
  <div className="strona-glowna">
    <div className="fryzjerzy-section">
      <h1>Lista naszych specjalistów:</h1>
      {isLoading && <p className="ladowanie">Ładowanie...</p>}
      {blad && <p className="wiadomosc-blad">Błąd: {blad}</p>}
      <div className="fryzjerzy-grid">
            {fryzjerzy.map((fryzjer) => (
          <FryzjerCard
            key={fryzjer.id ?? fryzjer.imie.toLowerCase().replace(/\s+/g, '-')}
            imie={fryzjer.imie}
            specjalizacja={fryzjer.stopien}
            opis={fryzjer.opis}
            zdjecie={`/fryzjere/${fryzjer.imie.toLowerCase().replace(/\s+/g, '-')}.jpg`}
          />
        ))}
      </div>
    </div>
  </div>





      {/* Sekcja kontaktowa */}
      <div
        style={{
          marginTop: '4em',
          display: 'flex',
          justifyContent: 'space-around',
          gap: '2em',
          flexWrap: 'wrap',
        }}
      >
        {/* Mapa Google Maps */}
        <div style={{ flex: '1 1 400px', minHeight: '300px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <iframe
            title="Mapa Barbershopu"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.511622254071!2d21.01174371598115!3d52.229675779787025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc7e62d1a64f%3A0x8d156fbe96d43102!2sWarszawa!5e0!3m2!1spl!2spl!4v1698123456789!5m2!1spl!2spl"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Formularz kontaktowy */}
        <ContactForm />
      </div>
    </div>
  );
}

// Prosty komponent formularza kontaktowego z walidacją i obsługą wysyłki
function ContactForm() {
  const [imie, setImie] = useState('');
  const [email, setEmail] = useState('');
  const [wiadomosc, setWiadomosc] = useState('');
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  // Prosta walidacja pól
  const validate = () => {
    const newErrors = {};
    if (imie.trim().length < 2) newErrors.imie = 'Imię musi mieć co najmniej 2 znaki.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Nieprawidłowy email.';
    if (wiadomosc.trim().length < 10) newErrors.wiadomosc = 'Wiadomość musi mieć co najmniej 10 znaków.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Wysyłamy dane do backendu (np. kontakt.php)
    fetch('http://localhost/api/kontakt.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imie, email, wiadomosc }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Błąd wysyłania wiadomości');
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setStatus('Wiadomość wysłana pomyślnie!');
          setImie('');
          setEmail('');
          setWiadomosc('');
          setErrors({});
          // Tutaj możesz dodać efekt konfetti, np. używając biblioteki react-confetti
        } else {
          setStatus('Wystąpił błąd: ' + (data.message || 'Nieznany błąd'));
        }
      })
      .catch(() => setStatus('Błąd połączenia z serwerem.'));
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        flex: '1 1 400px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1em',
        padding: '1em',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
      }}
      noValidate
    >
      <h2 style={{ color: '#6a4c93' }}>Kontakt</h2>

      <label>
        Imię:
        <input
          type="text"
          value={imie}
          onChange={(e) => setImie(e.target.value)}
          style={{ width: '100%', padding: '0.5em', borderRadius: '6px', border: errors.imie ? '1px solid red' : '1px solid #ccc' }}
        />
        {errors.imie && <small style={{ color: 'red' }}>{errors.imie}</small>}
      </label>

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '0.5em', borderRadius: '6px', border: errors.email ? '1px solid red' : '1px solid #ccc' }}
        />
        {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
      </label>

      <label>
        Wiadomość:
        <textarea
          value={wiadomosc}
          onChange={(e) => setWiadomosc(e.target.value)}
          rows="5"
          style={{ width: '100%', padding: '0.5em', borderRadius: '6px', border: errors.wiadomosc ? '1px solid red' : '1px solid #ccc' }}
        />
        {errors.wiadomosc && <small style={{ color: 'red' }}>{errors.wiadomosc}</small>}
      </label>

      <button
        type="submit"
        style={{
          padding: '0.75em',
          borderRadius: '10px',
          border: 'none',
          backgroundColor: '#6a4c93',
          color: '#fff',
          fontWeight: '700',
          cursor: 'pointer',
          fontSize: '1em',
        }}
      >
        Wyślij
      </button>

      {status && <p style={{ marginTop: '1em', color: status.startsWith('Wiadomość') ? 'green' : 'red' }}>{status}</p>}
    </form>
  );
}
