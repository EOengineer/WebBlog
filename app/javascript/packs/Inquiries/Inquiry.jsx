import React from 'react';
import ReactDOM from 'react-dom'


class Inquiry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    var inquiry         = this.props.inquiry;
    var displayedFields = this.props.displayedFields;
    return (
      <ul>
        {this.props.displayedFields.map((field, index) => {
          return <li key={index}>{field}: {inquiry[field]}</li>;
        })}
      </ul>
    )
  }
}

export default Inquiry;
