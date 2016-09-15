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
return(
<div id="container">
  <button className="button" onClick={this.props.onPlay}> Pause  </button>
</div>
)
}
})

module.exports = Controls;
