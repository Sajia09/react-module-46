import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, flags, population, region, area} = props.country;
    return (
        <div className='country'>
          <h2>Counrty Name: {name.common}</h2>
          <img src={flags.png} alt="" />
          <p>Population : {population}</p>
          <p><small>Region : {region}</small></p>  
          <small>Area : {area}</small>
        </div>
    );
};

export default Country;