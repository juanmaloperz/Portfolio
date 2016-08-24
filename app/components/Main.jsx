var React = require('react');
var Navigation = require ('Navigation');
var Prueba = require('Prueba');
var Entreno = require('Entreno');

var Main = (props) =>{
  return(
<div>
  <div >
      <div>
        <Navigation/>
        <p> Main.jsx Rendered </p>
    {props.children}
      </div>
      <Prueba/>
      <Entreno/>
    </div>
    </div>
  )
}

module.exports = Main;
