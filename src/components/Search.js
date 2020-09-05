import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
  const [term, setTerm] = useState('programming');

  useEffect(() => {
    const search = async () => {
      await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query', 
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
    };

    search();
  }, [term]);
  // useEffect(() => {
  //   const search = async () => {
  //     await axios.get('https://www.example.org/w/api.php'), {
  //       params: {
  //         action: 'query',
  //         list: 'search',
  //         origin: '*',
  //         format: 'json',
  //         srsearch: term
  //       },
  //     };
  //   };

  //   search();
  // }, [term]);

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