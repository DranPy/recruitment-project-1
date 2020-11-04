import React, { FC } from 'react'
import { Button, Container, Form, FormControl, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useCardState } from 'context/CardContext'
import useCurrencyFormat from 'hooks/useCurrencyFormat'
import Logo from 'assets/images/Logo.svg'
import './Navigation.scss'

const Navigation: FC = () => {
  const cardState = useCardState()
  const productsCount = cardState.products.length
  const productsPrice = cardState.products.reduce((sum, product) => sum + product.price, 0)
  const currencyFormat = useCurrencyFormat()

  return (
    <Navbar className="navbar-main" bg="dark" variant="dark" sticky="top" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="/">
          <img src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <FormControl size="sm" type="text" placeholder="Search" className="mr-sm-2" />
            <Button size="sm" variant="outline-secondary">
              Search
            </Button>
          </Form>
          <Nav className="m-auto">
            <Link className="nav-link" to="/products">
              All our products
            </Link>
            <Link className="nav-link" to="/inspiration">
              Inspiration for the office
            </Link>
            <Link className="nav-link" to="/about-us">
              About OS
            </Link>
          </Nav>
        </Navbar.Collapse>
        <div className="navbar-card">
          <span className="navbar-card-icon">
            <FontAwesomeIcon icon="cart-plus" />
            <span className="navbar-card-items-count">{productsCount}</span>
          </span>
          <span className="navbar-card-items-price">{currencyFormat(productsPrice)}</span>
        </div>
        <span className="navbar-checkout">
          <Button variant="outline-primary" size="sm" type="button">
            Check out
          </Button>
        </span>
      </Container>
    </Navbar>
  )
}

export default Navigation
