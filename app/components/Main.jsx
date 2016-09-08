var React = require('react');
var Navigation = require ('Navigation');
var Prueba = require('Prueba');
var Entreno = require('Entreno');

var Main = React.createClass({

render:function(){
  return(
<div>
  <div >
      <div>
        <Navigation/>
        <p> Main.jsx Rendered </p>
      </div>
      <Prueba/>
    </div>
    </div>
  )
}
});
module.exports = Main;
