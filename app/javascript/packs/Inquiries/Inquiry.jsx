import React from 'react';
import ReactDOM from 'react-dom'


class Inquiry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    var defaultFields  = this.props.defaultFields;
    var inquiry        = this.props.inquiry;

    return (
      <ul>
        {defaultFields.map((field, index) => {
          return <li key={index}>{field}: {inquiry[field]}</li>;
        })}
      </ul>
    )
  }
}

export default Inquiry;
