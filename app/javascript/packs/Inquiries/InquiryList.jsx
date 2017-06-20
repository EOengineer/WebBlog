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



  render() {

    var inquiries     = this.props.inquiries;
    var defaultFields = this.props.defaultFields;
    var pageSettings  = this.props.pageSettings;

    return (
      <div className="inquiries-container">

        <PageSettings pageSettings={pageSettings} />
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
