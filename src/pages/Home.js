import React from 'react'
import ProductList from '../components/ProductList'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <div>
      <SearchForm />
      <ProductList />
    </div>
  )
}

export default Home
