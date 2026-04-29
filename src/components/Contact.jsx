// css
import '../css/components.css';
import '../css/master.css';

import { useState } from 'react';



export default function Contact() {

    const [formData, setFormData] = useState({
        name:    '',
        phone:   '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendWhatsApp = () => {
        const { name, phone, message } = formData;
        const text = `الاسم: ${name}%0Aرقم الهاتف: ${phone}%0Aالرسالة: ${message}`;
        window.open(`https://wa.me/201146862114?text=${text}`, '_blank');
    };



    return (
        <div className="contactPage">

            <div className="pageHero">
                <div className="container">
                    <h1 className="pageHeroTitle">Contact Us</h1>
                </div>
            </div>
            <main className="contactMain">
                <div className="container">
                    <div className="contactCards">
                        <div className="contactCard">
                            <div className="contactCardIcon phone">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.12.81.37 1.6.72 2.34a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.74.35 1.53.6 2.34.72A2 2 0 0 1 22 18a2 2 0 0 1 0-.92z"/>
                                </svg>
                            </div>
                            <h4 className="contactCardTitle">Call us</h4>
                            <div className="contactCardInfo">
                                <a href="tel:01014826072" className="contactCardLink">01014826072</a>
                            </div>
                            <a href="tel:01014826072" className="contactCardBtn">Call</a>
                        </div>
                        <div className="contactCard">
                            <div className="contactCardIcon whatsapp">
                                <svg viewBox="0 0 32 32" fill="currentColor">
                                    <path d="M16 .396C7.163.396 0 7.559 0 16.396c0 2.886.75 5.706 2.176 8.2L0 32l7.6-2.14A15.94 15.94 0 0 0 16 31.604c8.837 0 16-7.163 16-16S24.837.396 16 .396zm0 29.2c-2.56 0-5.06-.688-7.24-1.988l-.52-.308-4.52 1.272 1.2-4.64-.34-.536A13.52 13.52 0 0 1 2.4 16.396c0-7.512 6.088-13.6 13.6-13.6s13.6 6.088 13.6 13.6-6.088 13.6-13.6 13.6zm7.44-10.16c-.408-.204-2.416-1.192-2.788-1.328-.372-.136-.644-.204-.916.204-.272.408-1.052 1.328-1.292 1.6-.24.272-.476.306-.884.102-.408-.204-1.724-.636-3.284-2.028-1.212-1.08-2.028-2.412-2.264-2.82-.236-.408-.024-.628.18-.832.184-.184.408-.476.612-.716.204-.24.272-.408.408-.68.136-.272.068-.51-.034-.716-.102-.204-.916-2.212-1.256-3.028-.332-.8-.668-.692-.916-.704l-.78-.012c-.272 0-.716.102-1.092.51-.376.408-1.436 1.404-1.436 3.42s1.472 3.964 1.676 4.236c.204.272 2.896 4.42 7.02 6.196.98.424 1.744.676 2.34.866.984.312 1.88.268 2.588.164.788-.116 2.416-.988 2.756-1.944.34-.956.34-1.776.238-1.944-.102-.168-.372-.272-.78-.476z"/>
                                </svg>
                            </div>
                            <h4 className="contactCardTitle">Whatsapp</h4>
                            <div className="contactCardInfo">
                                <a href="https://wa.me/201014826072" className="contactCardLink" target="_blank" rel="noreferrer">01014826072</a>
                            </div>
                            <a href="https://wa.me/201014826072" target="_blank" rel="noreferrer" className="contactCardBtn">Chat</a>
                        </div>
                        <div className="contactCard">
                            <div className="contactCardIcon instagram">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.56 4 20 5.44 20 7.75v8.5c0 2.31-1.44 3.75-3.75 3.75h-8.5C5.44 20 4 18.56 4 16.25v-8.5C4 5.44 5.44 4 7.75 4zm9.25 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                                </svg>
                            </div>
                            <h4 className="contactCardTitle">Instagram</h4>
                            <div className="contactCardInfo">
                                <span className="contactCardLink">@soulmatecafe_k</span>
                            </div>
                            <a href="https://www.instagram.com/soulmatecafe_k/" target="_blank" rel="noreferrer" className="contactCardBtn">Follow</a>
                        </div>
                        <div className="contactCard">
                            <div className="contactCardIcon facebook">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22 12a10 10 0 1 0-11.5 9.87v-6.99H7.9V12h2.6V9.8c0-2.57 1.53-3.99 3.87-3.99 1.12 0 2.29.2 2.29.2v2.5h-1.29c-1.27 0-1.67.79-1.67 1.6V12h2.84l-.45 2.88h-2.39v6.99A10 10 0 0 0 22 12z"/>
                                </svg>
                            </div>
                            <h4 className="contactCardTitle">facebook</h4>
                            <div className="contactCardInfo">
                                <span className="contactCardLink">ٍSoulmate Café</span>
                            </div>
                            <a href="https://www.facebook.com/profile.php?id=61588699661031" target="_blank" rel="noreferrer" className="contactCardBtn">تابعنا</a>
                        </div>
                    </div>
                    <div className="contactBottom">
                        <div className="contactForm">
                            <h3 className="contactFormTitle">Send a message</h3>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                onChange={handleChange}
                                className="contactInput"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                onChange={handleChange}
                                className="contactInput"
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                onChange={handleChange}
                                className="contactInput contactTextarea"
                            ></textarea>
                            <button onClick={sendWhatsApp} className="contactSubmitBtn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                                </svg>
                                Send by WhatsApp
                            </button>
                        </div>
                        <div className="contactMap">
                            <h3 className="contactFormTitle">Visit Us</h3>
                            <p className="contactMapSub">حدائق القبة — 99 ش زمزم، القاهرة</p>
                            <iframe
                                title="Our Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.8!2d31.2918!3d30.0938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSGFkYWlxIEFsIFF1YWJiYQ!5e0!3m2!1sar!2seg!4v1234567890"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}