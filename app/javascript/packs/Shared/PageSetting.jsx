import React from 'react';
import ReactDOM from 'react-dom'



class PageSetting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  selectSetting = () => {
      this.props.setActiveSetting(this.props.setting.id)
      this.props.updateFieldSelection(this.props.fieldSettings.fields);
  }




  render() {
    var setting = this.props.setting;
    var activeStyle = {
      backgroundColor: 'blue',
      color: 'white'
    };

    return (
        <li>
          <button
            style={this.props.selected == setting.id ? activeStyle : null}
            onClick={this.selectSetting}>{setting.title}
          </button>
        </li>
    )
  }
}



export default PageSetting;
