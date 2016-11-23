var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Checked = require('Checked');
var Resume = require('Resume');
var WeatherForm = require('WeatherForm');
var Prueba = require('Prueba');
var Clickme = require('Clickme');


//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="example" component={Clickme}></Route>
<Route path="resume" component={Prueba}></Route>
<Route path="checkbox" component={Clickme}></Route>
<IndexRoute component={Prueba}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
