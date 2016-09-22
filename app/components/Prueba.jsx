var React = require ('react');
var Controls = require('Controls');
var Resume = require('Resume');
var WeatherForm = require('WeatherForm');

var Prueba = React.createClass({
//  var {nexCount} = this.props;
  getInitialState: function(){
       return{
         playa:0,
         count: 0,
         status: 'Played'
       }
     },
     awayMade: function(){
       this.setState({
         playa: this.state.playa +1,
       })
     },


  startTime: function(count){
    this.timer = setInterval(()=>{
     var nexCount= this.state.count+1;
      this.setState({
        count: nexCount,
      });
    },1000);
  },


    componentDidMount: function(prevProps, prevState){
    //if(this.state.status != prevState.status){
    //  switch(this.state.status){
      //  case 'Played':
        this.startTime();
      //  break;
  // }
  },

    componentDidUpdate: function (prevProps, prevState) {
      if(this.state.status != prevState.status){
      switch (this.state.status) {
        case 'Paused':
        clearInterval(this.timer)
        this.timer = undefined;
          break;
        case 'Played':
        this.startTime()
          break;
      }
    }
    },
/*    componentWillUnmount: function(){
  clearInterval(this.timer)
  this.timer = undefined;
}, */
  onChange: function(){
  this.setState({status:'Paused'});
},

onResumed: function(){
  this.setState({status:'Played'})
},
handleForm : function(){
  this.setState({  place: 'place'})
},
render: function(){
  var {status} = this.state;
return(
<div>
<div className="kandys">
  <div className="container">
    <h1> Click on the Image for a Lucky Wish! </h1>
    <img onClick={this.awayMade} src="./images/pez.jpg"/>
    <h1> <strong><i>{this.state.playa} </i></strong>Lucky wishes!!</h1>
    <h1>  You got <strong> <i> {this.state.count} </i></strong> seconds on my page </h1>
    <Controls status={status} onPlay={this.onChange}  onResume={this.onResumed}/>
    </div>
  </div>
  <Resume/>
  <WeatherForm/>
</div>
);
}
});

module.exports = Prueba;
