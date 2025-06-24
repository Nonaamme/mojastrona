export default function FryzjerCard({ imie, stopien, opis, zdjecie }) {
    return (
      <div
        style={{
          width: '280px',
          borderRadius: '15px',
          padding: '1em',
          margin: '1em',
          boxShadow: '0 8px 15px rgba(106, 76, 147, 0.25)',
          transition: 'transform 0.35s ease, box-shadow 0.35s ease',
          cursor: 'default',
          backgroundColor: '#f8f5fb',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
          color: '#433f46',
          flex: '0 0 auto',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 15px 30px rgba(106, 76, 147, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 15px rgba(106, 76, 147, 0.25)';
        }}
      >
        <div style={{ marginBottom: '1.2em' }}>
          <img
            src={zdjecie}
            alt={`Zdjęcie fryzjera ${imie}`}
            style={{
              width: '100px',
              height: '100px',
              objectFit: 'cover',
              borderRadius: '50%',
              marginBottom: '1em',
              border: '3px solid #d8b4fe',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* <StetoskopIcon /> */}
        </div>
        <h3 style={{ marginBottom: '0.5em', color: '#6a4c93', fontWeight: '700' }}>
          {imie}
        </h3>
        <p style={{ fontStyle: 'italic', color: '#a678b2', marginBottom: '1.2em', fontWeight: '600' }}>
          {stopien}
        </p>
        <p>{opis}</p>
      </div>
    );
  }