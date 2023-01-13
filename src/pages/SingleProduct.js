import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
const url = 'https://dummyjson.com/products/'


const SingleProduct = () => {
  const { id } = useParams()
  const [loading, setloading] = useState(true)
  const [product, setproduct] = useState(null)
  const [error, setError] = useState(null)
  const fetchSingleProduct = async (id) => {
    setloading(true)
    try {
      const product = await axios.get(`${url}${parseInt(id)}`)
      const { data } = product
      console.log(data)
      if (!data) {
        setproduct(null)
        setloading(false)
      }
      setproduct(data)
      setloading(false)
    } catch (error) {
      console.log(error.response.data.message)
      setError(error.response.data.message)
      setloading(false)
    }
  }

  useEffect(() => {
    fetchSingleProduct(id)
  }, [id])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <h2 className='section-title'>{error}</h2>
  }
  const { title, description, price, rating, stock, brand, category, thumbnail } = product
  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
      <h2 className='section-title'>{title}</h2>
      <div className='drink'>
        <img src={thumbnail} alt={title} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>
              {title}
            </span>
          </p>
          <p>
            <span className='drink-data'>
              {price}
            </span>
          </p>
          <p>
            <span className='drink-data'>
              {rating}
            </span>
          </p>
          <p>
            <span className='drink-data'>
              {stock}
            </span>
          </p>
          <p>
            <span className='drink-data'>
              {brand}
            </span>
          </p>
          <p>
            <span className='drink-data'>
              {category}
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct
