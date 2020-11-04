import React, { FC } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Navigation from './Navigation'

import Footer from './Footer'
import './Layout.scss'
import Sidebar from './Sidebar'

const Layout: FC = (props) => {
  const { children } = props

  return (
    <>
      <Navigation />
      <main>
        <Container>
          <Row>
            <Col md="3">
              <Sidebar />
            </Col>
            <Col md="9">{children}</Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default Layout
