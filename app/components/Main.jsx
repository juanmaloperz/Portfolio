var React = require('react');
var Navigation = require ('Navigation');
var Prueba = require('Prueba');

class  Main extends React.Component{

render(){
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
};
module.exports = Main;
