import { Container, Row, Col } from 'react-bootstrap'
//import { MailchimpForm } from './MailchimpForm'
import logo from '../assets/img/logocolor.png'
import { SocialMedia } from './SocialMedia'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <SocialMedia />
            <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
