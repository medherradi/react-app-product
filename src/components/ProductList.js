import React from 'react'
import Product from './Product'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const ProductList = () => {
  const { products, loading } = useGlobalContext()

  if (loading) {
    return <Loading />
  }
  if (!products.length) {
    return <h2 className='section-title'>
      no phone matched your search ...
    </h2>
  }
  return (
    <div>
      <h2>cocktail list component</h2>
    </div>
  )
}

export default ProductList
