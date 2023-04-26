import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import github from '../assets/img/github.png'
export const OtherProyects = () => {
  const projects = [
    {
      name: 'CSGO: Gungame Plugin',
      technologies: 'SourcePawn',
      description:
        'Plugin para el juego CS:GO que implementa el modo de juego Gun Game y que ha sido mejorado y personalizado para incluir mejoras visuales y nuevas funcionalidades para mejorar la experiencia de juego.',
      url: 'https://github.com/arieladasme/csgo-gungame-plugin',
    },
    {
      name: 'Deno CRUD Rest APi',
      technologies: 'Deno',
      description:
        'CRUD simple desarrollado en Deno para interactuar con una base de datos simple.\n' +
        'El objetivo principal es familiarizarse con la tecnología de Deno y su capacidad para crear aplicaciones web, mientras se aprende sobre el funcionamiento básico de un CRUD.',
      url: 'https://github.com/arieladasme/deno-crud-restapi',
    },
    {
      name: 'Python CRUD Rest APi',
      technologies: 'Python, MySql',
      description:
        'El proyecto es un CRUD simple desarrollado en Python utilizando el ORM SQLAlchemy, y una base de datos MySQL.\n' +
        'El objetivo del proyecto es familiarizarse con la tecnología de SQLAlchemy y su capacidad para interactuar con bases de datos relacionales como MySQL.',
      url: 'https://github.com/arieladasme/python-mysql-sqlalchemy',
    },
  ]

  const ProjectItem = ({ project }) => {
    return (
      <Col md={6} className="mb-4">
        <Card bg="dark" border="info">
          <Card.Header as="h5">{project.name}</Card.Header>
          <Card.Body>
            <Card.Text style={{ width: '100%', textAlign: 'left', whiteSpace: 'pre-wrap' }}>
              {project.description}
            </Card.Text>
            <Card.Subtitle className="mb-2">{project.technologies}</Card.Subtitle>
            <div className="social-icon">
              <a href={project.url} target="_blank" rel="noreferrer">
                <img src={github} alt="" />
              </a>
            </div>
          </Card.Body>
        </Card>
      </Col>
    )
  }

  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        {projects.map(project => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </Row>
    </Container>
  )
}
