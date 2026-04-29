// img 
import '../css/components.css';
import '../css/master.css';
import '../components/Home';

import imgLogo from '../images/logo2-removebg-preview.png';
import { useState, useEffect, useRef } from 'react';



export default function Header() {
  const [menuOpen, setMenuOpen]         = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef                     = useRef(null);
  useEffect(() => {
      const saved = localStorage.getItem('darkMode') === 'true';
      document.body.classList.toggle('dark', saved);
      const switchEl = document.getElementById('switch');
      if (switchEl) switchEl.checked = saved;
  }, []);
  useEffect(() => {
      const switchEl  = document.getElementById('switch');
      const handler   = () => {
          const isDark = switchEl.checked;
          document.body.classList.toggle('dark', isDark);
          localStorage.setItem('darkMode', isDark);
      };
      switchEl.addEventListener('change', handler);
      return () => switchEl.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
      const handleClickOutside = (e) => {
          if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
              setDropdownOpen(false);
          }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <div className="mainHeader">
        <div className="firstSection">
          <a className="logo" href="/home">
            <img src={imgLogo} alt="logo" className="logo-light" />
          </a>
        </div>
        <div className={`secondSection ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li className="has-dropdown" ref={dropdownRef}>
              <button
                type="button"
                className={`nav-link ${dropdownOpen ? 'active' : ''}`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Menu
                <span className="arrow-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              <ul className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
                <li><a href="/hot" className="dropdown-link" onClick={() => setDropdownOpen(false)}>Hot Drinks</a></li>
                <li><a href="/cold" className="dropdown-link" onClick={() => setDropdownOpen(false)}>Cold Drinks</a></li>
                <li><a href="/soft" className="dropdown-link" onClick={() => setDropdownOpen(false)}>Soft Drink</a></li>
                <li><a href="/dessert" className="dropdown-link" onClick={() => setDropdownOpen(false)}>Dessert Menu</a></li>
                <li><a href="/extra" className="dropdown-link" onClick={() => setDropdownOpen(false)}>Extra</a></li>
              </ul>
            </li>
            <li><a href="/about" className="nav-link">About Us</a></li>
            <li><a href="/location" className="nav-link">Our Location</a></li>
            <li><a href="/contact" className="nav-link">Contact Us</a></li>
          </ul>
        </div>
        <div className="lastSection">
          <div className="switchMode">
            <label htmlFor="switch" className="toggle">
              <input type="checkbox" className="input" id="switch" />
              <div className="icon icon--moon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="icon icon--sun">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              </div>
            </label>
          </div>
          <a href="https://www.facebook.com/profile.php?id=61588699661031" target="_blank" rel="noopener noreferrer" className="social-icon facebook-icon" aria-label="فيسبوك">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
            </svg>
          </a>
          <a href="https://wa.me/01014826072" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp-icon" aria-label="واتساب">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
          </a>
          <div className="mobileBox">
            <button
              className={`mobbox ${menuOpen ? 'active' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="القائمة"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
  );
}