import calendar from '../assets/img/calendar.jpg'
import gestionGastos from '../assets/img/gestionGastos.jpg'
import seguros from '../assets/img/seguros.jpg'
import cotizador from '../assets/img/cotizador.jpg'
import noticias from '../assets/img/noticias.jpg'
import gif from '../assets/img/gif.jpg'
import hotel from '../assets/img/hotel.jpg'
import { Button, Card, Col, Row } from 'react-bootstrap'

export const FrontProyects = () => {
  const projects = [
    {
      title: 'Calendar App',
      description:
        'Guarda todos tus eventos importantes en un solo lugar y mantén un seguimiento de tus compromisos diarios, semanales y mensuales con facilidad.',
      imgUrl: calendar,
      url: 'https://remarkable-tulumba-79961b.netlify.app',
    },
    {
      title: 'Gestor de Gastos',
      description:
        'Ingresa tu presupuesto y registra tus gastos para ver fácilmente cuánto dinero te queda disponible.',
      imgUrl: gestionGastos,
      url: 'https://adoring-ardinghelli-0d8a7e.netlify.app/',
    },
    {
      title: 'Cotizador de Seguros',
      description: 'Revisa el seguro que necesitas con nuestra app.',
      imgUrl: seguros,
      url: 'https://suspicious-wing-c9a71e.netlify.app/',
    },
    {
      title: 'Cotizador Crypto',
      description: 'Revisa los valores actuales de tu criptomoneda favorita.',
      imgUrl: cotizador,
      url: 'https://cocky-jones-9fef5b.netlify.app/',
    },
    {
      title: 'Buscador de Noticias',
      description: 'Revisa las noticias que te mas te interesan con el buscador de noticias',
      imgUrl: noticias,
      url: 'https://infallible-hopper-bca53c.netlify.app/',
    },
    {
      title: 'GifFinderApp',
      description: 'Encuentra los mejores gif con nuestro buscador.',
      imgUrl: gif,
      url: 'https://gif-finder1.netlify.app/',
    },
    {
      title: 'Gastby Hotel',
      description: 'Descubre nuestros mejores espacios para descanzar en Gastby Hotel.',
      imgUrl: hotel,
      url: 'https://eloquent-sinoussi-22a498.netlify.app/',
    },
  ]
  return (
    <Row xs={1} md={2} className="g-4">
      {projects.map((project, index) => (
        <Col>
          <Card bg="dark" border="info">
            <Card.Img variant="top" src={project.imgUrl} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text style={{ width: '100%', textAlign: 'left', whiteSpace: 'pre-wrap' }}>
                {project.description}
              </Card.Text>
              <a href={project.url} target="_blank" rel="noreferrer">
                <Button variant="primary">Ver en GitHub</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}
