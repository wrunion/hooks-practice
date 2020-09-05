import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
  const [term, setTerm] = useState('')

  // const search = () => {
  //   axios.get('https://www.example.org/w/api.php'), {

  //   }
  // }

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input 
            value={term}
            onChange={e => setTerm(e.target.value)}
            className="input" />
        </div>
      </div>
    </div>
  )
}

export default Search;