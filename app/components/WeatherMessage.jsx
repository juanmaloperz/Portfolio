var React = require('react');

var WeatherMessage = ({temp,location}) =>{
  return(
    <div>
      <h3>  El clima es {temp} grados en: {location} </h3>
    </div>
  )
};
 module.exports = WeatherMessage;
