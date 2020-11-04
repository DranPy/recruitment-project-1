import React, { FC, FormEvent, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import cn from 'classnames'

import useCurrencyFormat from 'hooks/useCurrencyFormat'
import { Product } from 'types/Product'

import './ProductOverview.scss'
import ImagesPreview from './ImagesPreview'

interface ProductOverviewProps {
  product: Product
  onSubmit: ((product: Product) => void) | undefined
}

const ProductOverview: FC<ProductOverviewProps> = (props) => {
  const { product, onSubmit } = props
  const [isFullDescription, setIsFullDescription] = useState(false)
  const currencyFormat = useCurrencyFormat()

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    onSubmit && onSubmit(product)
  }

  return (
    <div className="product-overview">
      <Row className="product-overview-inner">
        <Col md="8">
          <h2>{product.name}</h2>
          <Form className="product-overview-form" onSubmit={handleSubmit}>
            <Row>
              <Col md="4">
                <h4 className="mb-0">{currencyFormat(product.price)}</h4>
                <small className="product-overview-old-price">{currencyFormat(product.oldPrice)}</small>
              </Col>
              <Col md="4">
                <Form.Control as="select">
                  <option>White</option>
                  <option>Black</option>
                </Form.Control>
              </Col>
              <Col md="4">
                <Button block value={product.id} type="submit">
                  Buy
                </Button>
              </Col>
            </Row>
          </Form>
          <div
            className={cn('product-overview-description', { 'product-overview-description-full': isFullDescription })}
          >
            {isFullDescription ? product.fullDescription : product.shortDescription}
            <Button
              variant="link"
              className="py-0"
              type="button"
              onClick={() => setIsFullDescription(!isFullDescription)}
            >
              {isFullDescription ? 'Read less' : 'Read more'}
            </Button>
          </div>
        </Col>
        <Col md="4">
          <ImagesPreview images={product.images} />
        </Col>
      </Row>
      <div className="product-overview-attributes">
        {product.attributes.map((attributes, key) => (
          <div className="product-overview-attribute" key={key}>
            <h5>{attributes.title}</h5>
            <div>{attributes.body}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductOverview
