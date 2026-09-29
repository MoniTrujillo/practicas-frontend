import type { Product } from '~/types/product'

export const products: Product[] = [
  {
    id: 1,
    image: 'https://i.pinimg.com/1200x/11/3e/a8/113ea85dfb3c266a3966d280dd19ffd3.jpg',
    title: 'Galletas',
    description: 'Galletas crujientes y deliciosas.',
    price: 599,
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/736x/ea/82/93/ea829398c5d53d5f821089b9208e3813.jpg',
    title: 'Cafe',
    description: 'Cafe recién hecho delicioso.',
    price: 450,
  },
  {
    id: 3,
    image: 'https://i.pinimg.com/736x/9c/4b/8e/9c4b8e536d3b22d89a7203a398fec4f5.jpg',
    title: 'Pastel de chocolate',
    description: 'Pastel de chocolate delicioso.',
    price: 250,
  },
]