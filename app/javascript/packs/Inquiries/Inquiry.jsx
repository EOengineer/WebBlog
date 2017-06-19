import React from 'react';
import ReactDOM from 'react-dom'


class Inquiry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    var fields  = this.props.fields;
    var inquiry = this.props.inquiry;

    return (
      <div>
        {fields.map((field) => {
          return <p>{field}: {inquiry[field]}</p>;
        })}
      </div>
    )
  }
}

export default Inquiry;
