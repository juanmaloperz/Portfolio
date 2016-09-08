var React = require('React');

var Controls = React.createClass({
 propTypes: {
      // We need the status prop to change the buttons
      onPlay: React.PropTypes.func.isRequired,
       status: React.PropTypes.func.isRequired
},
  onPlay: function(){
      this.props.onPlay;

},
render: function(){
  var {status} = this.props;
return(
<div id="container">
  <button className="button" onClick={this.onPlay}> Pause  </button>
</div>
)
}
})

module.exports = Controls;
