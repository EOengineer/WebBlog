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
      <div className="page-settings-container">
        <ul>
          {pageSettings.map((setting, index) => {
            return (
              <PageSetting key={index}
                           setting={setting}
                           selectedSetting={this.props.selectedSetting}
                           updateSelectedSetting={this.props.updateSelectedSetting} />
            )
          })}
        </ul>
      </div>
    )
  }
}



export default PageSettings;
