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
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/inquiries">Inquiries</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/about">About</a></li>
      </ul>
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

