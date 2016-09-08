var React = require('React');

var Entreno = React.createClass({
handleSubmit: function (e) {
e.preventDefault();
var firstHandle = this.refs.firstHandle.value;  //PILASS
      if(firstHandle.match(/^[0-9]*$/)){
       this.refs.firstHandle.value= '';
       this.props.onEntreno(firstHandle);
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
</div>
);
  }
});

module.exports = Entreno;
