import React from 'react';
import ReactDOM from 'react-dom'
import $ from 'jquery';

// import PageSettings from '../Shared/PageSettings'
import Inquiry from './Inquiry'

class InquiryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inquiries: []
    };
  }


  componentDidMount() {
    $.getJSON('/inquiries?user_id=1.json',
      (response) => { this.setState({ inquiries: response }) });
  }

  render() {
    return (
      <div className="inquiries-items table">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              {this.props.displayedFields.map((fieldName) => {
                return(
                  <th key={fieldName} style={{textTransform: "capitalize"}}>{fieldName.replace("_", " ")}</th>
                )
              })}
            </tr>
          </thead>
          <tbody>

            {this.state.inquiries.map((inquiry, index) => {
              return (
                <Inquiry
                 inquiry={inquiry}
                 displayedFields={this.props.displayedFields}
                 key={inquiry.id} />
              )
            })}

          </tbody>
        </table>
      </div>
    )
  }
}

export default InquiryList;
