var React = require('react');

class Clickme extends React.Component{
  constructor(props){
   super(props);
    this.state = {
      isChecked:true ,
      maguaj: "no playu"
    }
  }
render(){
return(
<div>
  <div>
    <input type="checkbox" onChange={(e) => {
      this.setState({isChecked: e.target.checked});
    }} checked={this.state.isChecked}/>
    Some checkbox
  </div>
  <button className="button"
  onClick={()=>{ this.setState({isChecked: !this.state.isChecked});
}}> Change the checked item</button>
  <div>
<label>
<input type="radio" name="maguaj" checked={this.state.maguaj === "playu"} onChange={(e)=>{
    this.setState({maguaj:e.target.value})
  }} value="playu" /> Playu
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
};

module.exports = Clickme;
