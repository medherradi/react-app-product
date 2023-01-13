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
    <div>
      <h2>{title}</h2>
    </div>
  )
}

export default SingleProduct
