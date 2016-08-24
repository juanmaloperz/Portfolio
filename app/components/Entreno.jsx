var React = require('React');

var Entreno = React.createClass({
handleSubmit: function(e){
e.preventdefault();
var firstHandle = this.refs.firstHandle.value;  //PILASS
if(firstHandle.match(/^[0-9]*$/)){
this.refs.firstHandle.value= " "
} else{
  this.refs.firstHandle.focus();
}
},
  render: function(){
return(
<div className= "container">
    <form onSubmit={this.handleSubmit}>
  <input type="text" ref="firstHandle" placeholder="Enter your lucky Number from 1 to 10"></input>
  <button  className="expanded button"> Enter </button>
  </form>
  <p>{this.props.playa}</p>
</div>
);
  }
});

module.exports = Entreno;
