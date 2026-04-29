// css
import '../css/components.css';
import '../css/master.css';

// الأقسام
import cat1 from '../images/hot.jpeg';
import cat2 from '../images/cold.png';
import cat3 from '../images/soft.jpeg';
import cat4 from '../images/logo.jpeg';
import cat5 from '../images/westCat.png';
// data
import { products } from '../components/data';
import { Link }        from 'react-router-dom';
import { useState, useEffect } from 'react';

const allCategories = [
    { id: 1, img: cat1, name: 'Hot Drinks',    route: '/hot',   category: 'hot'   },
    { id: 2, img: cat2, name: 'Cold Drinks',     route: '/cold', category: 'cold' },
    { id: 3, img: cat3, name: 'Soft Drinks',     route: '/soft', category: 'soft' },
    { id: 5, img: cat5, name: 'Dessert Menu',  route: '/dessert',  category: 'dessert'  },
    { id: 4, img: cat4, name: 'Extra',     route: '/extra',    category: 'extra'    },
];
const PAGE_CATEGORY = 'soft';
const PAGE_TITLE    = 'Soft Drinks';

export default function Soft() {
    const [showScroll, setShowScroll] = useState(false);
    const pageProducts    = products.filter((p) => p.category === PAGE_CATEGORY);
    const otherCategories = allCategories.filter((cat) => cat.category !== PAGE_CATEGORY);
    useEffect(() => {
        const handleScroll = () => setShowScroll(window.scrollY > 300);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    return (
        <div className="sectionPage">
            <main className="sectionMain">
                <div className="container">
                    <div className="sectionHead">
                        <h2 className="sectionTitle">{PAGE_TITLE}</h2>
                        <span className="sectionLine"></span>
                    </div>
                    <div className="productsGrid">
                        {pageProducts.map((product) => (
                            <div className="productCard" key={product.id}>
                                <div className="productImgBox">
                                    <img src={product.img} alt={product.name} className="productImg" />
                                </div>
                                <div className="productInfo">
                                    <h3 className="productName">{product.name}</h3>
                                    <span className="productPrice">{product.price} ج.م</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <section className="otherCategories">
                <div className="container">
                    <div className="sectionHead">
                        <h2 className="sectionTitle">Other Categories</h2>
                        <span className="sectionLine"></span>
                    </div>
                    <div className="categoriesGrid">
                        {otherCategories.map((cat) => (
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
            <a
                href="https://wa.me/01146862114"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsappFloat show"
                aria-label="Order Now"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
                <span>Order Now</span>
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