import { BrowserRouter , Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home     from './components/Home';
import Hdrink    from './components/Hdrink';
import Cold  from './components/Cold';
import Soft  from './components/Soft';
import Extra     from './components/Extra';
import Dessert   from './components/Dessert';
import About    from './components/About';
import Contact  from './components/Contact';
import Location from './components/Location';
import Loader   from './components/Loader';
import Header   from './components/Header';
import Footer   from './components/Footer';



function AnimatedRoutes() {
  const location                  = useLocation();
  const [loading, setLoading]     = useState(false);
  useEffect(() => {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 800);
      return () => clearTimeout(timer);
  }, [location.pathname]);
  if (loading) return <Loader />;
  return (
      <Routes location={location}>
          <Route index element={<Home/>} />
          <Route path="/home"     element={<Home     />} />
          <Route path="/hot"      element={<Hdrink     />} />
          <Route path="/cold"     element={<Cold     />} />
          <Route path="/soft"     element={<Soft     />} />
          <Route path="/extra"     element={<Extra     />} />
          <Route path="/dessert"   element={<Dessert   />} />
          <Route path="/about"    element={<About    />} />
          <Route path="/contact"  element={<Contact  />} />
          <Route path="/location" element={<Location />} />
      </Routes>
  );
}



export default function App() {
    return (
        <BrowserRouter >
          <Header/>
          <AnimatedRoutes />
          <Footer/>
        </BrowserRouter>
    );
}

