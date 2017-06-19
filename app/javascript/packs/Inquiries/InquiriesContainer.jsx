import React from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';

import InquiryList from './InquiryList'

class InquiriesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inquiries: [],
      defaultSettings: [],
      defaultFields: []
    };

    this.pullSettings = this.pullSettings.bind(this);
  }

  componentDidMount() {
    $.getJSON('/inquiries?user_id=1.json', (response) => { this.setState({ inquiries: response }) });
    $.getJSON('/user-settings?key=inquiries&user_id=1.json', (settings) => { this.pullSettings(settings) });
  }

  pullSettings(settings) {
    if (settings.length > 0) {
      var defaultSettings       = settings.filter((setting) => {return setting.default == true});
      var parsedDefaultSettings = JSON.parse(defaultSettings[0].settings)
      var defaultFields         = parsedDefaultSettings.fields;

      this.setState({defaultSettings: parsedDefaultSettings, defaultFields: defaultFields})
    }
  }



  render() {
    //return <InquiryList inquiries={this.state.inquiries} fields={this.state.defaultFields} />;
    return (
      <div>
        {this.state.inquiries.map((inquiry) => {
          var thing;
          this.state.defaultFields.map((field) => {
            thing = inquiry[field];
            console.log(inquiry[field])
          })
          return <div>{thing}</div>;
        })}
      </div>
    )
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
