var React = require('react');

var WeatherMessage = ({temp,location}) =>{
  return(
    <div>
      <h3>  The Weather is {temp} Celsius grades in {location} </h3>
    </div>
  )
};
 module.exports = WeatherMessage;
