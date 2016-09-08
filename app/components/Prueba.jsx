var React = require ('react');
var Entreno = require('Entreno');
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


 /*componentDidMount: function(prevProps, prevState){
    //if(this.state.status != prevState.status){
      switch(this.state.status){
        case 'Played':
        this.startTime();
        break;
   }
  },*/
  onChange: function(){
  this.setState({status:"Paused"})
  clearInterval(this.timer)
  this.timer(undefined);
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
    <h2> So please put the closeCaption and dont miss what i say</h2>
    <Controls status={status} onChange={this.onPlay}/>
    </div>
  </div>
);
}
});

module.exports = Prueba;
