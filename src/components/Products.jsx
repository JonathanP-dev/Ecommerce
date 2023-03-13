import './Products.css'
import {AddToCartIcon} from './Icons'
// import products from '../mocks/products.json'

export function Products ({products}) {
 
  // const productos = products.products
  return(
    <main className='products'>
      <ul>
        {products.slice(0, 10).map(product => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>))
        }
      </ul>
    </main>
  )
}