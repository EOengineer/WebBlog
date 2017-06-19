import React from 'react';
import ReactDOM from 'react-dom'

class InquiryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    var inquiries = this.props.inquiries;

    return (
      <div>
        {inquiries.map((inquiry) => {
          return <Inquiry name={inquiry.name}
                          address={inquiry.address}
                          sales_rep={inquiry.sales_rep}
                          key={inquiry.id} />;
        })}
      </div>
    )
  }
}

export default InquiryList;
