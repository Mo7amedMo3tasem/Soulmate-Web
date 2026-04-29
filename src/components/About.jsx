// css
import '../css/components.css';
import '../css/master.css';

// image
import aboutImg from '../images/logo.jpeg';

import { useState, useEffect } from 'react';



export default function About() {

    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowScroll(window.scrollY > 300);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    return (
        <div className="aboutPage">
            <div className="pageHero">
                <div className="container">
                    <h1 className="pageHeroTitle">About Us</h1>
                    <p className="pageHeroSub">Good coffee. Good vibes. Every time</p>
                </div>
            </div>
            <main className="aboutMain">
                <div className="container">
                    <div className="aboutRow">
                        <div className="aboutImgBox">
                            <img src={aboutImg} alt="حلواني أبو عادل" className="aboutImg" />
                        </div>
                        <div className="aboutTextBox">
                            <div className="sectionHead" style={{ textAlign: 'right', alignItems: 'flex-start' }}>
                                <h2 className="sectionTitle"> Soulmate Café</h2>
                                <span className="sectionLine"></span>
                            </div>
                            <p className="aboutDesc">
                                our café combining a relaxing atmosphere with delicious food, offering a distinctive selection of hot and cold beverages to suit all tastes. It also features a selection of freshly baked goods and delectable Western desserts. The perfect place to spend quality time with friends, enjoy moments of peace and quiet, or work.
                            </p>
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