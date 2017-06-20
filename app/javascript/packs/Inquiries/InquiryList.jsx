import React from 'react';
import ReactDOM from 'react-dom'

import PageSettings from '../Shared/PageSettings'
import Inquiry from './Inquiry'

class InquiryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  getDefaultSetting = (pageSettings) => {
    if (pageSettings.length > 0) {
      var defaultSetting = pageSettings.filter((setting) => {return setting.default == true})
      return defaultSetting
    }
  }

  render() {

    var inquiries     = this.props.inquiries;
    var defaultFields = this.props.defaultFields;
    var pageSettings  = this.props.pageSettings;

    var defaultSetting = this.getDefaultSetting(pageSettings)

    return (
      <div className="inquiries-container">

        <PageSettings
         pageSettings={pageSettings}
         defaultSetting={defaultSetting ? defaultSetting : null}
         updateFieldSelection={this.props.updateFieldSelection} />

        {inquiries.map((inquiry, index) => {
          return (
            <Inquiry
             inquiry={inquiry}
             defaultFields={defaultFields}
             key={index} />
          )
        })}

      </div>
    )
  }
}

export default InquiryList;
