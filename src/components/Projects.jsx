import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'

import colorSharp2 from '../assets/img/color-sharp2.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import { FrontProyects } from './FrontProyects'
import { BackProyects } from './BackProyects'
import { OtherProyects } from './OtherProyects'

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Proyectos</h2>
                  <p>
                    En esta sección encontrarás mis proyectos de Frontend, Backend y otros
                    realizados con diversas tecnologías.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Frontend con ReactJS</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Backend</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Otros</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={`animate__animated ${isVisible ? 'animate__slideInUp' : ''}`}
                    >
                      <Tab.Pane eventKey="first">
                        <FrontProyects />
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <BackProyects />
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <OtherProyects />
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
