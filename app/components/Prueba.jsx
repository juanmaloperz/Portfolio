var React = require ('react');
var Controls = require('Controls');

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
    componentWillUnmount: function(){
  clearInterval(this.timer)
  this.timer = undefined;
},
  onChange: function(){
  this.setState({status:'Paused'});
},

onResumed: function(){
  this.setState({status:'Played'})
},
render: function(){
  var {status} = this.state;
return(

  <div className="container">
    <h1> Click en la imagen </h1>
    <div className="kandys">
    <img onClick={this.awayMade} src="./images/kan.jpg"/>
    <h1> {this.state.playa} Lucky wishes!!</h1>
    <h1>  You got {this.state.count} seconds on my page </h1>
    <Controls status={status} onPlay={this.onChange}  onResume={this.onResumed}/>
    </div>
  </div>
);
}
});

module.exports = Prueba;
