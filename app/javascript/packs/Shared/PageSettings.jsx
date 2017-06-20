import React from 'react';
import ReactDOM from 'react-dom'
//import $ from 'jquery';



class PageSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSettings: [],
      defaultFields: []
    };
  }

  componentDidMount() {
    this.setState({pageSettings: this.props.pageSettings})
  }


  render() {
    var pageSettings = this.props.pageSettings;

    return (
      <div className="page-settings-container">
        <ul>
          {pageSettings.map((setting, index) => {
            var fieldSettings = JSON.parse(setting.settings);
            return (
              <li key={index}>
                <span>{setting.key}</span>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}



export default PageSettings;
