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
    <section className='section'>
      <h2 className='section-title'>List of Product</h2>
      <div className='cocktails-center'>
        {products.map((product) => {
          return <Product key={product.id} product={product} />
        })}
      </div>
    </section>
  )
}

export default ProductList
