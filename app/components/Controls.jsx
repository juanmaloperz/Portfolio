var React = require('react');

class Controls extends React.Component {
 /*propTypes: {
      // We need the status prop to change the buttons
       status: React.PropTypes.func.isRequired
},
/*onPlay: function(){
      this.props.onChange();
}, */

render(){
  var {status} = this.props;
  var Played =()=>{
    if(status==="Paused"){
    return  <button className="button" onClick={this.props.onResume}> Resume </button>
    } else {
      return   <button className="button" onClick={this.props.onPlay}> Pause  </button>
    }
  };
return(
<div>
{Played()}
</div>
)
}
}

module.exports = Controls;
