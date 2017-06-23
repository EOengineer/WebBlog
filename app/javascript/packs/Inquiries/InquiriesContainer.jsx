import React from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';

import PageSettings from '../Shared/PageSettings'
import InquiryList from './InquiryList'


class InquiriesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSetting: this.getDefaultSettings(),
      displayedFields: []
    };
  }



  getDefaultSettings() {
    $.getJSON('/user-settings/default?key=inquiries&user_id=1.json',
      (selectedSetting) => {
        var fields = JSON.parse(selectedSetting.settings).fields;
        this.setState({selectedSetting: selectedSetting, displayedFields: fields})
      });
  }


  updateSelectedSetting = (selectedSetting) => {
    var fields = JSON.parse(selectedSetting.settings).fields;
    this.setState({selectedSetting: selectedSetting, displayedFields: fields})
  }



  initializeInquiriesContainer() {
    if (this.state.selectedSetting != null) {
      return(
        <div className="inquiries-container">
          <PageSettings selectedSetting={this.state.selectedSetting} updateSelectedSetting={this.updateSelectedSetting} />
          <InquiryList displayedFields={this.state.displayedFields} />
        </div>
      )
    } else {
      return <div>loading...</div>;
    }
  }



  render() {

    return (
        <div>
        { this.initializeInquiriesContainer()}
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
