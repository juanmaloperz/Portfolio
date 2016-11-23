var React = require('react');

var Clickme = React.createClass({
  getInitialState:function(){
    return{
      isChecked:true,
    maguaj:"no playu"
     }
  },
render : function(){
return(
<div>
  <div>
    <input type="checkbox" onChange={(e) => {
      this.setState({isChecked: e.target.checked});
    }} checked={this.state.isChecked}/>
    Some checkbox
  </div>

  <div>
    <button onClick={() => {
      this.setState({isChecked: !this.state.isChecked});
    }}>Programmatically Toggle Checkbox</button>
  </div>
  <div>
<label>
<input type="radio" name="maguaj" checked={this.state.maguaj === "playu"} onChange={(e)=>{
    this.setState({maguaj:e.target.value})
  }} value="playu"/> Playu
</label>
<label>
  <input type="radio" name="maguaj" checked={this.state.maguaj === "no playu"} onChange={(e)=>{
      this.setState({maguaj:e.target.value})
    }} value="no playu"/> no playu
</label>
 </div>
   <div>
     Your select is {this.state.maguaj}
   </div>
</div>
);
}
});

module.exports = Clickme;
