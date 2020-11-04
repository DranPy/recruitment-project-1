import React, { FC } from 'react'
import ProductOverview from 'components/ProductOverview'

import { useCardDispatch } from 'context/CardContext'

import PaperImage1 from 'assets/images/paper1.jpg'
import PaperImage2 from 'assets/images/paper2.jpg'
import PaperImage3 from 'assets/images/paper3.jpg'

const ProductOverviewContainer: FC = () => {
  const cardDispatch = useCardDispatch()
  const productMock = {
    id: 1,
    name: 'Paper',
    fullDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra',
    images: [PaperImage1, PaperImage2, PaperImage3],
    price: 565,
    oldPrice: 670,
    attributes: [
      {
        title: 'Paper is awesome!',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.',
      },
      {
        title: 'Paper is cool!',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
      },

      {
        title: 'Paper is great!',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet la.',
      },
    ],
  }

  return (
    <ProductOverview
      onSubmit={(product) =>
        cardDispatch({
          type: 'addProduct',
          payload: product,
        })
      }
      product={productMock}
    />
  )
}

export default ProductOverviewContainer
