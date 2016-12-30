var React = require('react');

class Checked extends React.Component{
constructor(props){
	super(props);
	this.state={
		isChecked:true,
		topping: 'No Cheese'
	}
}

  render() {
    return <div>
			<div>
        <input type="checkbox" onChange={(e) => {
        	this.setState({isChecked: e.target.checked});
        }} checked={this.state.isChecked}/>
        Some checkbox
      </div>

			<div>
      	<button  className="button" onClick={() => {
          this.setState({isChecked: !this.state.isChecked});
        }}>Programmatically Toggle Checkbox</button>
      </div>

      <div>
				<label>
	        <input type="radio" name="topping" checked={this.state.topping === 'Cheese'} onChange={(e) => {
          	this.setState({topping: e.target.value})
          }} value="Cheese"/>Cheese
        </label>
				<label>
	        <input type="radio" name="topping" checked={this.state.topping === 'No Cheese'} onChange={(e) => {
          	this.setState({topping: e.target.value})
          }} value="No Cheese"/>No Cheese
        </label>
				<label>
					<input type="radio" name="topping" checked={this.state.topping === 'Fuck'} onChange={(e) => {
						this.setState({topping: e.target.value})
					}} value="Fuck"/>Fuck
				</label>

      </div>

      <div>
      	Current select is {this.state.topping}
      </div>
    </div>;
  }
};

module.exports = Checked;
