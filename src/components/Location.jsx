// css
import '../css/components.css';
import '../css/master.css';

import { useState, useEffect } from 'react';



export default function Location() {

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
      const handleScroll = () => setShowScroll(window.scrollY > 300);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });



  return (
      <div className="locationPage">
          <div className="pageHero">
              <div className="container">
                  <h1 className="pageHeroTitle">Our Location</h1>
                  <p className="pageHeroSub">Visit us at our cafe</p>
              </div>
          </div>
          <main className="locationMain">
              <div className="container">
                  <div className="branchCard">
                      <div className="branchInfo">
                          <h3 className="branchName">Hadayeq Elqobba Branch</h3>
                          <div className="branchDetail">
                              <span className="branchDetailIcon">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                      <circle cx="12" cy="10" r="3" />
                                  </svg>
                              </span>
                              <p>Cairo , Hadayeq Elqobba</p>
                          </div>
                          <div className="branchDetail">
                              <span className="branchDetailIcon">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 18a2 2 0 0 1 0-.92z" />
                                  </svg>
                              </span>
                              <div>
                                  <a href="tel:01146862114" className="branchPhone">01014826072</a>
                              </div>
                          </div>
                          <a
                              href="https://maps.app.goo.gl/bV6JcewLUvw2GAre6"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="branchDirectionBtn"
                          >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                              </svg>
                              احصل على الاتجاهات
                          </a>
                      </div>
                      <div className="branchMap">
                          <iframe
                              title="موقع حدائق القبة"
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.8!2d31.2918!3d30.0938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSGFkYWlxIEFsIFF1YWJiYQ!5e0!3m2!1sar!2seg!4v1234567890"
                              width="100%"
                              height="100%"
                              style={{ border: 0 }}
                              allowFullScreen=""
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                      </div>
                  </div>
              </div>
          </main>
          <button
              className={`scrollBar ${showScroll ? 'show' : ''}`}
              onClick={scrollToTop}
              aria-label="العودة للأعلى"
          >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z"/>
                  <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
              </svg>
          </button>
      </div>
  );
}