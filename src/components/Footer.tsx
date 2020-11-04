import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container, Row } from 'react-bootstrap'
import Logo from 'assets/images/Logo.svg'

const Footer: FC = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md="8">
            <a href="/">
              <img className="w-25" src={Logo} alt="Logo" />
            </a>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida
              dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
              vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.
            </p>
          </Col>
          <Col md="2">
            <h5>Bestsellers</h5>
            <ul className="pl-3">
              <li>
                <a href="/">A4</a>
              </li>
              <li>
                <a href="/">A5</a>
              </li>
              <li>
                <a href="/">Pens</a>
              </li>
              <li>
                <a href="/">A4</a>
              </li>
              <li>
                <a href="/">A5</a>
              </li>
              <li>
                <a href="/">Pens</a>
              </li>
              <li>
                <a href="/">Staplers</a>
              </li>
            </ul>
          </Col>
          <Col md="2">
            <h5>We're social!</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">
                  <FontAwesomeIcon icon={['fab', 'facebook']} className="mr-2" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="/">
                  <FontAwesomeIcon icon={['fab', 'twitter']} className="mr-2" />
                  Twitter
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={['fab', 'linkedin']} className="mr-2" />
                <a href="/">Linked ins</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
