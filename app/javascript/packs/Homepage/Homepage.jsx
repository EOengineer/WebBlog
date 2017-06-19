import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Hero from './Hero'
import Info from './Info'

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <Hero />
        <Info />
      </div>
    );
  }
}

export default Homepage;


document.addEventListener('turbolinks:load', () => {
  var el = document.getElementById('homepage');
  if (el != null) {
    ReactDOM.render(
      <Homepage />,
      document.getElementById('homepage').appendChild(document.createElement('div'))
    )
  }
})
