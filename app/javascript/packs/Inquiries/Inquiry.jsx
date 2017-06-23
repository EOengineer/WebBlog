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
      <tr>
      <td>{inquiry.id}</td>
        {this.props.displayedFields.map((field, index) => {
          return <td key={index}>{field}: {inquiry[field]}</td>;
        })}
      </tr>
    )
  }
}

export default Inquiry;
