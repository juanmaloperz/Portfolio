var React = require ('react');

var Prueba = React.createClass({

getInitialState: function(){
  return{
    playa: 10,
    completed:false
  };
},


homeMade(){
  this.setState({
    playa: this.state.playa +2,
    completed:true
  });
},


render: function(){
return(
  <div>
    <h1> Click en la imagen </h1>
    <div className="kandys">
    <img onClick={this.homeMade} src="./images/kan.jpg"/>
    </div>
    <p> {this.state.playa} Lucky wishes</p>
  </div>
);
}
});

module.exports = Prueba;
