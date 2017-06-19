import React from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';

import InquiryList from './InquiryList'

class InquiriesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inquiries: []
    };
  }

  componentDidMount() {
    $.getJSON('/inquiries.json', (response) => { this.setState({ inquiries: response }) });
  }


  render() {
    return <InquiryList inquiries={this.state.inquiries} />;
  }
}

export default InquiriesContainer;






document.addEventListener('turbolinks:load', () => {
  var inquiriesContainer = document.getElementById('inquiries');
  if (inquiriesContainer != null) {
    ReactDOM.render(
      <InquiriesContainer />,
      inquiriesContainer
    )
  }
})
