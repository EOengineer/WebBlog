import React from 'react';
import ReactDOM from 'react-dom'
import PageSetting from './PageSetting';
import $ from 'jquery';


class PageSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPresets: false,
      pageSettings: []
    };
  }

  componentDidMount() {
    $.getJSON('/user-settings?key=inquiries&user_id=1.json',
      (pageSettings) => {
        this.setState({pageSettings: pageSettings})
    });
  }


  togglePresets = () => {
    this.setState({displayPresets: !this.state.displayPresets})
  }



  render() {

    var pageSettings = this.state.pageSettings;
    console.log(this.state.displayPresets)
    return (
      <div style={{display: "inline-block", margin: "1em"}} className="page-settings-container">

          <button
           onClick={this.togglePresets}
           className="btn btn-default"
           style={{textAlign: "center"}}>
            {this.state.displayPresets ? "Hide all view presets" : "Select a view preset"}
          </button>

          {this.state.displayPresets &&
          <div className="page-settings-list">
            {pageSettings.map((setting, index) => {
              return (
                <PageSetting key={index}
                             setting={setting}
                             selectedSetting={this.props.selectedSetting}
                             updateSelectedSetting={this.props.updateSelectedSetting} />
              )
            })}
          </div>
        }

      </div>
    )
  }
}



export default PageSettings;
