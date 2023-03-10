import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')
  React.useEffect(() =>
    searchValue.current.focus()
  )
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const searchProduct = () => {
    setSearchTerm(searchValue.current.value)
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your product</label>
          <input type='text' id='name' ref={searchValue} onChange={searchProduct} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
