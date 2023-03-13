import { useFilters } from '../hooks/useFilters'
import './Footer.css'
export function Footer () {
  const {filters} = useFilters()
  return (
    <footer className='footer'>
      <h3>React Ecommerce</h3>
      <span>JonaPereiraDev</span>
      <p>{JSON.stringify(filters)}</p>
      <h4>Shopping Cart with useContext & useReducer</h4>
    </footer>
  )
}