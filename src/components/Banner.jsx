import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import yo from '../assets/img/yo.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen'

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const [, setIndex] = useState(1)
  const toRotate = ['Full Stack Developer', 'Web Designer']
  const period = 1500

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText

    if (isDeleting) {
      updatedText = fullText.substring(0, text.length - 1)
      setDelta(prevDelta => prevDelta / 2)
    } else {
      updatedText = fullText.substring(0, text.length + 1)
      if (updatedText === fullText) {
        setIsDeleting(true)
        setDelta(period)
      }
    }

    setText(updatedText)
    if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
      setIndex(1)
    } else if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setIndex(prevIndex => prevIndex - 1)
      setDelta(period)
    } else {
      setIndex(prevIndex => prevIndex + 1)
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hola! Soy Ariel,`}{' '}
                    <span className="txt-rotate" dataperiod="1000" data-rotate={toRotate}>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Desarrollador profesional altamente responsable con capacidad de discernir entre
                    la información y procesos útiles en pro de cumplir los objetivos del equipo.
                    Capaz de encontrar soluciones para agilizar el desarrollo del proyecto.
                  </p>
                  <p>
                    Me proyecto laboralmente para aumentar mi experticia en análisis de datos
                    mediante la utilización de KPIs, siempre mejorando mis buenas prácticas,
                    manteniendo un código limpio, escalable y sostenible en el tiempo.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                  <img src={yo} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
