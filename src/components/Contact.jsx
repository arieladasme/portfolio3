import { Container, Row, Col } from 'react-bootstrap'
import email from '../assets/img/email.png'
import wsp from '../assets/img/wsp.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

export const Contact = () => {
  const handleClick = () => {
    window.open('mailto:ariel.wm1@gmail.com')
  }

  return (
    <section className="contact" id="contact">
      <Container>
        <h2>Contacto</h2>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? 'animate__animated animate__zoomIn wspLogo' : 'wspLogo'}
                  src={email}
                  alt="Contact Us"
                  onClick={handleClick}
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? 'animate__animated animate__fadeIn animate__zoomIn' : ''}
                >
                  <div className="wspLogo">
                    <a
                      href="https://api.whatsapp.com/send?phone=56971858206"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={wsp} alt="" />
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
