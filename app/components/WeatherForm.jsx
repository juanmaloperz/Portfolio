var React = require('React');

var WeatherForm = React.createClass({
onCity: function (e) {
  e.preventDefault()
  var location = this.refs.location.value;

  if(location.length >0){
    this.refs.location.value = '';
    this.props.onForm(location);
  }
},

render:function(){
return(
<div>
 <form onSubmit={this.onCity}>
   <div>
   <input type="text" ref="location" placeholder=" Enter the city "/>
    </div>
    <div>
    <button className="button expanded hollow"> Get Weather </button>
    </div>
  </form>
</div>
);
}

});
module.exports = WeatherForm;
