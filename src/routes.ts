import ProductOverviewContainer from 'containers/ProductOverviewContainer'

export const ROUTES = Object.freeze({
  mainPage: {
    path: '/',
    component: ProductOverviewContainer,
    exact: true,
  },
})
