import React from 'react';
import ReactDOM from 'react-dom'


class Inquiry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    var name     = this.props.name;
    var address  = this.props.address;
    var salesRep = this.props.sales_rep

    return (
      <div>
        <h5>Name: {name}</h5>
        <p>Address: {address}</p>
        <p>Sales Rep: {salesRep}</p>
      </div>
    )
  }
}

export default Inquiry;
