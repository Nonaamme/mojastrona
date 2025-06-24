import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const links = [
    { to: '/', label: 'Strona główna' },
    { to: '/Fryzjerzy', label: 'Fryzjerzy' },
    { to: '/Logowanie', label: 'Logowanie' },
  ];
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#333', color: 'white' }}>
      <h1>Barbershop Classic Style</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {links.map(link => (
          <Link
            key={link.to}
            to={link.to}
            style={{
              color: location.pathname === link.to ? 'yellow' : 'white',
              textDecoration: 'none',
              fontWeight: location.pathname === link.to ? 'bold' : 'normal',
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
  // Additional code would follow here
}
