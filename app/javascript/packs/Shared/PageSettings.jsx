import React from 'react';
import ReactDOM from 'react-dom'
import PageSetting from './PageSetting';
import $ from 'jquery';


class PageSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSettings: []
    };
  }

  componentDidMount() {
    $.getJSON('/user-settings?key=inquiries&user_id=1.json',
      (pageSettings) => {
        this.setState({pageSettings: pageSettings})
    });
  }



  render() {

    var pageSettings = this.state.pageSettings;

    return (
      <div style={{display: "inline-block", margin: "1em"}} className="page-settings-container">
          <p style={{textAlign: "center"}}>Select a view preset.</p>
          {pageSettings.map((setting, index) => {
            return (
              <PageSetting key={index}
                           setting={setting}
                           selectedSetting={this.props.selectedSetting}
                           updateSelectedSetting={this.props.updateSelectedSetting} />
            )
          })}
      </div>
    )
  }
}



export default PageSettings;
