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
      selectedFields: []
    };
  }



  componentDidMount = () => {
    $.getJSON('/inquiries?user_id=1.json',
      (response) => { this.setState({ inquiries: response }) });

    $.getJSON('/user-settings?key=inquiries&user_id=1.json',
      (settings) => { this.pullSettings(settings) });
  }


  updateFieldSelection = (selectedFields) => {
    this.setState({selectedFields: selectedFields})
  }





  pullSettings(settings) {
    if (settings.length > 0) {
      var defaultSettings       = settings.filter((setting) => {return setting.default == true});
      var parsedDefaultSettings = JSON.parse(defaultSettings[0].settings)
      var selectedFields        = parsedDefaultSettings.fields;

      this.setState({pageSettings: settings, selectedFields: selectedFields})
    }
  }


  render() {

    var inquiries     = this.state.inquiries;
    var defaultFields = this.state.selectedFields;
    var pageSettings  = this.state.pageSettings;

    return (
        <InquiryList
          inquiries={inquiries}
          pageSettings={pageSettings}
          defaultFields={defaultFields}
          updateFieldSelection={this.updateFieldSelection} />
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
