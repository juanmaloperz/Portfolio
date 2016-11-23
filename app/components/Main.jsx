var React = require('react');
var Navigation = require ('Navigation');
var Prueba = require('Prueba');

var Main = React.createClass({

render:function(){
  return(
<div>
  <div >
      <div>
        <Navigation/>
      </div>
      {this.props.children}
    </div>
    </div>
  )
}
});
module.exports = Main;
