import React from 'react'
import { Link } from 'react-router-dom'


const Product = ({ product }) => {
  console.log(product)
  const { id, title, brand, discountPercentage, thumbnail: image } = product
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={title} />
      </div>
      <div className='cocktail-footer'>
        <h3>{title}</h3>
        <h4>{brand}</h4>
        <h4>-{discountPercentage}%</h4>
        <Link to={`product/${id}`} className='btn btn-primary btn-details'>more info</Link>
      </div>

    </article>
  )
}

export default Product
