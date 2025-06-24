import React, { useState } from 'react';
import './Sidebar.css';

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`oferta-sidebar ${expanded ? 'expanded' : ''}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="sidebar-header">Oferta</div>
      <div className="sidebar-content">
      <h4>Usługi fryzjerskie</h4>
        <ul>
          <li>Strzyżenie męskie klasyczne</li>
          <li>Strzyżenie brody i konturowanie</li>
          <li>Golarka / brzytwa na gorąco</li>
          <li>Pakiet Premium (strzyżenie + broda)</li>
          <li>Cover (tonowanie siwizny)</li>
          <li>Stylizacja włosów</li>
          <li>Masaż głowy</li>
          <li>Mycie i pielęgnacja włosów</li>
          <li>Trymowanie brwi</li>
          <li>Pakiet Ślubny</li>
          <li>Voucher podarunkowy</li>
        </ul>
      </div>
    </div>
  );
}
