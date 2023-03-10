import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import axios from 'axios'

const url = 'https://dummyjson.com/products/search?q='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [products, setproducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setloading] = useState(true)

  const fetchData = useCallback(async () => {
    setloading(true)
    try {
      const response = await axios.get(`${url}${searchTerm}`)
      const data = response.data.products
      if (!data.length) {
        setproducts([])
        setloading(false)
      }
      setproducts(data)
      setloading(false)

    } catch (error) {
      console.log(error)
      setloading(false)
    }
  }, [searchTerm])

  useEffect(() => {
    fetchData()
  }, [searchTerm, fetchData])

  return <AppContext.Provider value={{ products, loading, setSearchTerm, }}>
    {children}
  </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
