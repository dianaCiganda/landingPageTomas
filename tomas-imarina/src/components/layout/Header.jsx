import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { label: 'Funding', href: '#funding' },
    { label: 'Overview', href: '#overview' },
    { label: 'Publications', href: '#publications' },
    { label: 'Teaching', href: '#teaching' },
    { label: 'Supervision', href: '#supervision' },
    { label: 'Updates', href: '#updates' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav container">
        <div className="logo">
          <span className="logo-name">Tomás Imarina</span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="hamburger" onClick={toggleMenu} aria-label="Menú">
          <i className="fas fa-bars"></i>
        </button>
      </nav>
    </header>
  )
}

export default Header
