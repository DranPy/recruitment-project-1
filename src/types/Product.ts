export interface Product {
  id: number
  name: string
  price: number
  oldPrice: number
  images: string[]
  shortDescription: string
  fullDescription: string
  attributes: { title: string; body: string }[]
}
