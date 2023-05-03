import { Button, Card, Col, Row } from 'react-bootstrap'
import { frontend } from '../data/proyects'

export const FrontProyects = () => {
  return (
    <Row xs={1} md={2} className="g-4">
      {frontend.map((project, index) => (
        <Col key={index}>
          <Card bg="dark" border="info">
            <Card.Img variant="top" src={project.imgUrl} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text style={{ width: '100%', textAlign: 'left', whiteSpace: 'pre-wrap' }}>
                {project.description}
              </Card.Text>
              <a href={project.url} target="_blank" rel="noreferrer">
                <Button variant="primary">Ver app</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}
