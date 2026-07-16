'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Schedule from './components/Schedule';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

export default function HomePage() {
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);

  // Read cookie consent from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('nomad_cookie_consent');
    if (saved === 'true') {
      setCookieConsent(true);
    } else if (saved === 'false') {
      setCookieConsent(false);
    } else {
      setCookieConsent(null);
    }
  }, []);

  // Update cookie consent and persist in localStorage
  const handleConsent = (consent: boolean) => {
    localStorage.setItem('nomad_cookie_consent', consent.toString());
    setCookieConsent(consent);
  };

  return (
    <div className="min-h-screen bg-brand-black text-brand-white selection:bg-brand-red selection:text-brand-white">
      {/* Sticky Header */}
      <Header />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Introduction Section */}
        <Intro />
        
        {/* Training Schedule Section */}
        <Schedule />
        
        {/* Google Maps / Location Section */}
        <Location 
          cookieConsent={cookieConsent} 
          onAcceptCookies={() => handleConsent(true)} 
        />
        
        {/* Call to Action & Contact Section */}
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Cookie Banner (GDPR Consent) */}
      {cookieConsent === null && (
        <CookieBanner 
          onAccept={() => handleConsent(true)} 
          onReject={() => handleConsent(false)} 
        />
      )}
    </div>
  );
}