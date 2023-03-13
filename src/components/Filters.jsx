import { useState, useId } from 'react';
import { useFilters } from '../hooks/useFilters';
import './Filters.css'

export function Filters () {

  const minPriceFilterId = useId()
  const categoryFilterId = useId()
  const {filters, setFilters} = useFilters();

  const handleChange = (e) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }
  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Min price</label>
        <input type="range" id={minPriceFilterId} min='0' max='1000' value={filters.minPrice} onChange={handleChange}/>
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory} defaultValue={filters.category}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  );
}