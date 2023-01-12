import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import axios from 'axios'

const url = 'https://dummyjson.com/products/search?q='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [products, setproduct] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setloading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}${searchTerm}`)
      const data = response.data
      console.log(data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [searchTerm])

  return <AppContext.Provider value='hello'>
    {children}
  </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
