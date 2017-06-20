import React from 'react';
import ReactDOM from 'react-dom'
import PageSetting from './PageSetting';



class PageSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSetting: props.defaultSetting
    };
  }


  setActiveSetting = (setting) => {
      this.setState({activeSetting: setting, defaultSetting: false});
  }


  render() {
    var pageSettings = this.props.pageSettings;

    return (
      <div className="page-settings-container">
        <ul>
          {pageSettings.map((setting, index) => {
            var fieldSettings = JSON.parse(setting.settings);
            return (
              <PageSetting key={index}
                           setting={setting}
                           selected={this.state.activeSetting}
                           fieldSettings={fieldSettings}
                           updateFieldSelection={this.props.updateFieldSelection}
                           setActiveSetting={this.setActiveSetting} />
            )
          })}
        </ul>
      </div>
    )
  }
}



export default PageSettings;
