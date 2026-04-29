// css
import '../css/components.css';
import '../css/master.css';

// السلايدر
import slide1 from '../images/landing.png';
import slide2 from '../images/guitar.jpeg';
import slide3 from '../images/drinks/landing.jpg';


// الأقسام
import cat1 from '../images/hot.jpeg';
import cat2 from '../images/cold.png';
import cat3 from '../images/soft.jpeg';
import cat4 from '../images/logo.jpeg';
import cat5 from '../images/westCat.png';

import aboutImg from '../images/logo.jpeg';

import { useState, useRef, useEffect } from 'react';
import { Link }                        from 'react-router-dom';


const slides = [
{ id: 1, img: slide1 },
{ id: 2, img: slide2 },
{ id: 3, img: slide3 },
];

const categories = [
{ id: 1, img: cat1, name: 'Hot Drinks',    route: '/hot'   },
{ id: 2, img: cat2, name: 'Cold Drinks',     route: '/cold' },
{ id: 3, img: cat3, name: 'Soft Drinks',     route: '/soft' },
{ id: 5, img: cat5, name: 'Dessert Menu',  route: '/dessert'  },
{ id: 4, img: cat4, name: 'Extra',     route: '/extra'    },
];

const stats = [
  { id: 1, icon: '⭐', title: 'High Quality',   sub: 'We use the best ingredients'    },
  { id: 2, icon: '🌿', title: 'Fresh Daily', sub: 'We prepare our products every day'   },
  { id: 3, icon: '🤝', title: 'Best Services',   sub: 'To all our customers'     },
];


export default function Home() {

const [current,      setCurrent]      = useState(0);
const [dragging,     setDragging]     = useState(false);
const [startX,       setStartX]       = useState(0);
const [offsetX,      setOffsetX]      = useState(0);
const [animating,    setAnimating]    = useState(false);
const [showScroll,   setShowScroll]   = useState(false);
const [showWhatsApp, setShowWhatsApp] = useState(false);
const trackRef      = useRef(null);
const productSecRef = useRef(null);
const threshold     = 60;
const total         = slides.length;

const goTo = (index) => {
    if (animating) return;
    setAnimating(true);
    setCurrent((index + total) % total);
    setTimeout(() => setAnimating(false), 500);
};
const goPrev = () => goTo(current - 1);
const goNext = () => goTo(current + 1);
const onMouseDown = (e) => { setDragging(true); setStartX(e.clientX); setOffsetX(0); };
const onMouseMove = (e) => { if (!dragging) return; setOffsetX(e.clientX - startX); };
const onMouseUp   = () => {
    if (!dragging) return;
    setDragging(false);
    if      (offsetX >  threshold) goPrev();
    else if (offsetX < -threshold) goNext();
    setOffsetX(0);
};
const onTouchStart = (e) => { setDragging(true); setStartX(e.touches[0].clientX); setOffsetX(0); };
const onTouchMove  = (e) => { if (!dragging) return; setOffsetX(e.touches[0].clientX - startX); };
const onTouchEnd   = () => {
    if (!dragging) return;
    setDragging(false);
    if      (offsetX >  threshold) goPrev();
    else if (offsetX < -threshold) goNext();
    setOffsetX(0);
};
useEffect(() => {
    const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
}, [total]);

useEffect(() => {
    const handleScroll = () => {
        setShowScroll(window.scrollY > 300);

        if (productSecRef.current) {
            const rect = productSecRef.current.getBoundingClientRect();
            setShowWhatsApp(rect.top < window.innerHeight);
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

return (
    <div className="home">
        <div className="landing">
            <div
                className={`swiper ${dragging ? 'dragging' : ''}`}
                ref={trackRef}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseUp}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <div
                    className="swiper-track"
                    style={{
                        transform:  `translateX(calc(${-current * 100}% + ${offsetX}px))`,
                        transition: dragging ? 'none' : 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                >
                    {slides.map((slide) => (
                        <div className="swiper-slide" key={slide.id}>
                            <img src={slide.img} alt="slide" className="swiper-img" draggable="false" />
                        </div>
                    ))}
                </div>
                <button className="swiper-btn swiper-btn--prev" onClick={goNext} aria-label="السابق">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
                <button className="swiper-btn swiper-btn--next" onClick={goPrev} aria-label="التالي">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>

                <div className="swiper-dots">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            className={`swiper-dot ${i === current ? 'active' : ''}`}
                            onClick={() => goTo(i)}
                            aria-label={`الانتقال للسلايد ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
        <section className="productsSection" ref={productSecRef}>
            <div className="container">
                <div className="sectionHead">
                    <h2 className="sectionTitle">Menu</h2>
                    <span className="sectionLine"></span>
                </div>
                <div className="categoriesGrid">
                    {categories.map((cat) => (
                        <Link to={cat.route} key={cat.id} className="categoryCard">
                            <div className="categoryImgBox">
                                <img src={cat.img} alt={cat.name} className="categoryImg" />
                                <div className="categoryOverlay">
                                    <span className="categoryArrow">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="categoryInfo">
                                <h3 className="categoryName">{cat.name}</h3>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>

        <section className="statsSection">
            <div className="container">
                <div className="statsGrid">
                    {stats.map((stat) => (
                        <div className="statCard" key={stat.id}>
                            <span className="statIcon">{stat.icon}</span>
                            <h3 className="statTitle">{stat.title}</h3>
                            <p className="statSub">{stat.sub}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <section className="homeAbout">
            <div className="container">
                <div className="homeAboutInner">
                    <div className="homeAboutImg">
                        <img src={aboutImg} alt="SoulMate" />
                    </div>
                    <div className="homeAboutText">
                        <div className="sectionHead" style={{ textAlign: 'left', alignItems: 'flex-start' }}>
                            <h2 className="sectionTitle">About Us</h2>
                            <span className="sectionLine"></span>
                        </div>
                        <p className="homeAboutDesc">
                            Our café combining a relaxing atmosphere with delicious food, offering a distinctive selection of hot and cold beverages to suit all tastes. It also features a selection of freshly baked goods and delectable Western desserts. The perfect place to spend quality time with friends, enjoy moments of peace and quiet, or work.
                        </p>
                        <Link to="/about" className="homeAboutBtn">Learn More</Link>
                    </div>
                </div>
            </div>
        </section>
        <a
            href="https://wa.me/01014826072"
            target="_blank"
            rel="noopener noreferrer"
            className={`whatsappFloat ${showWhatsApp ? 'show' : ''}`}
            aria-label="Order Now"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
            <span> Order now</span>
        </a>

        <button
            className={`scrollBar ${showScroll ? 'show' : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to Top"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z"/>
                <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
            </svg>
        </button>
    </div>
);
}