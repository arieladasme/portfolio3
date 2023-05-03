import { Card, Col, Container, Row } from 'react-bootstrap'
import { others } from '../data/proyects'
import github from '../assets/img/github.png'

export const OtherProyects = () => {
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
        {others.map(project => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </Row>
    </Container>
  )
}
