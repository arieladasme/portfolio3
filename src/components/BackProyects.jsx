import { Card, Col, Container, Row } from 'react-bootstrap'
import github from '../assets/img/github.png'
export const BackProyects = () => {
  const projects = [
    {
      name: 'Nest Shop',
      technologies: 'NestJs, Postgress, TypeORM, Docker',
      description:
        'Este proyecto backend ha sido diseñado para gestionar la autenticación de usuarios y la gestión de productos. Además, incluye la implementación de JwtStrategy para garantizar una mayor seguridad y privacidad. Entre las funcionalidades destacan los endpoints CRUD para una correcta gestión de productos, así como eliminación en cascada, paginación, seed, carga y validación de archivos múltiples.\n' +
        'El backend también cuenta con una compleja organización de entidades, rutas privadas y custom decorators para garantizar una correcta autenticación y protección de datos.\n' +
        'En definitiva, este proyecto backend es una herramienta muy valiosa para cualquier empresa que requiera una potente gestión de productos y usuarios de una manera sencilla, rápida y segura. ',
      url: 'https://github.com/arieladasme/teslo-shop',
    },

    {
      name: 'Natours',
      technologies: 'Express, Mongoose',
      description:
        'Este proyecto consta de una API RESTful rápida, escalable y rica en funciones. Incluye filtros, clasificaciones, paginación y otras características avanzadas para mejorar la experiencia del usuario.\n' +
        'Además, se implementan operaciones CRUD con MongoDB y Mongoose para trabajar de manera eficiente con bases de datos NoSQL, incluidos datos geoespaciales.\n' +
        'También se presta especial atención a la seguridad y se utilizan técnicas como el cifrado, la sanitización y la limitación de velocidad para proteger y optimizar la aplicación en todo momento.\n' +
        'Finalmente, el proyecto profundiza en las características avanzadas de Mongoose.',
      url: 'https://github.com/arieladasme/express-mongoose',
    },
    {
      name: 'Calendar App',
      technologies: 'Express, Mongoose',
      description:
        'Una aplicación de backend que utiliza Express.js y MongoDB para proporcionar una API para gestionar eventos del calendario.\n' +
        'La aplicación incluye rutas y endpoints, middlewares personalizados, Mongoose, autenticación de usuario con JWT y CRUDs para eventos del calendario.',
      url: 'https://github.com/arieladasme/calendar-backend',
    },
    {
      name: 'Nest Api personalizado',
      technologies: 'NestJs, Mongoose, TypeORM',
      description:
        'Aplicación de backend construida utilizando el framework de NestJS. El proyecto está disponible en dos ramas en Git, una utilizando MongoDB (en desarrollo) y otra utilizando TypeORM.\n' +
        'La aplicación incluye la gestión de usuarios y la autenticación con JWT para acceder a los endpoints protegidos. El objetivo es proporcionar una API base para nuevos proyectos con NestJS.',
      url: 'https://github.com/arieladasme/nest-api-base',
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
