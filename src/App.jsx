import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import CookieBanner from './components/CookieBanner.jsx'
import { leerCookies } from './cookies.js'
import './App.css'

export default function App() {
  const [bannerAbierto, setBannerAbierto] = useState(() => leerCookies() === null)

  return (
    <>
      <Header />
      <Hero />
      <Footer onOpenCookiePrefs={() => setBannerAbierto(true)} />
      <CookieBanner
        abierto={bannerAbierto}
        onCerrar={() => setBannerAbierto(false)}
      />
    </>
  )
}
