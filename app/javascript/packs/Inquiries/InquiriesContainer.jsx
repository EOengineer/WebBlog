import React from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';

import PageSettings from '../Shared/PageSettings'
import InquiryList from './InquiryList'


class InquiriesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inquiries: [],
      pageSettings: [],
      defaultFields: []
    };

    this.pullSettings = this.pullSettings.bind(this);
  }



  componentDidMount() {
    $.getJSON('/inquiries?user_id=1.json',
      (response) => { this.setState({ inquiries: response }) });

    $.getJSON('/user-settings?key=inquiries&user_id=1.json',
      (settings) => { this.pullSettings(settings) });
  }



  pullSettings(settings) {
    console.log(settings)
    if (settings.length > 0) {
      var defaultSettings       = settings.filter((setting) => {return setting.default == true});
      var parsedDefaultSettings = JSON.parse(defaultSettings[0].settings)
      var defaultFields         = parsedDefaultSettings.fields;

      this.setState({pageSettings: settings, defaultFields: defaultFields})
    }
  }



  render() {

    var inquiries     = this.state.inquiries;
    var defaultFields = this.state.defaultFields;
    var pageSettings  = this.state.pageSettings;

    return (
        <InquiryList
          inquiries={inquiries}
          pageSettings={pageSettings}
          defaultFields={defaultFields} />
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
