var React = require('React');

var Controls = React.createClass({
 /*propTypes: {
      // We need the status prop to change the buttons
       status: React.PropTypes.func.isRequired
},
/*onPlay: function(){
      this.props.onChange();
}, */

render: function(){
  var {status} = this.props;
  var Played =()=>{
    if(status==="Paused"){
    return  <button ClasName="button" onClick={this.props.onResume}> Resume </button>
    }
  };
return(
<div id="container">
  <button className="button" onClick={this.props.onPlay}> Pause  </button>
{Played()}
</div>
)
}
})

module.exports = Controls;
