import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-sidebar-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><a href="/">Home<span style={{fontSize: "16px"}} className="pull-right hidden-xs showopacity glyphicon glyphicon-home"></span></a></li>
            <li className="active"><a href="/inquiries">Inquiries<span style={{fontSize: "16px"}} className="pull-right hidden-xs showopacity glyphicon glyphicon-list"></span></a></li>
            <li><a href="/contact">Contact<span style={{fontSize: "16px"}} className="pull-right hidden-xs showopacity glyphicon glyphicon-user"></span></a></li>
            <li><a href="/about">About<span style={{fontSize: "16px"}} className="pull-right hidden-xs showopacity glyphicon glyphicon-tags"></span></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;


document.addEventListener('turbolinks:load', () => {
  ReactDOM.render(
    <Navigation />,
    document.getElementById('navigation')
  )
})

