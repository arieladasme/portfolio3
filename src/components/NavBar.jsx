/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../assets/img/logocolor.png'
import { SocialMedia } from './SocialMedia'

const navLinks = [
  { text: 'Home', href: '#home', id: 'home' },
  { text: 'Habilidades', href: '#skills', id: 'skills' },
  { text: 'Proyectos', href: '#projects', id: 'projects' },
  { text: 'Contacto', href: '#contact', id: 'contact' },
]

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onUpdateActiveLink = value => setActiveLink(value)

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toogler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map(link => (
              <Nav.Link
                key={link.id}
                href={link.href}
                className={activeLink === link.id ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink(link.id)}
              >
                {link.text}
              </Nav.Link>
            ))}
          </Nav>
          <span className="navbar-text">
            <SocialMedia />
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
