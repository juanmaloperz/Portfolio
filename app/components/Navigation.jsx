var React = require ('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () =>{
return(
  <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            Portfolio
          </li>
          <li>
            <IndexLink to="/example" activeClassName="active-link"> Example</IndexLink>
          </li>
          <li>
            <Link to="/resume" activeClassName="active-link">Resume</Link>
          </li>
          <li>
            <Link to="/checkbox" activeClassName="active-link"> Weather</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="https://co.linkedin.com/in/juan-manuel-lopez-mora-0a412b66" target="_blank">Juan Lopez</a>
          </li>
        </ul>
      </div>
    </div>
);
};

module.exports = Navigation ;
