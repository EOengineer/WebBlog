import React from 'react';
import ReactDOM from 'react-dom'



class PageSetting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelected: false,
      selectedSetting: this.props.selectedSetting.id,
      setting: this.props.setting
    };
  }


  selectSetting = () => {
    this.props.updateSelectedSetting(this.state.setting)
  }


  render() {
    var setting = this.state.setting;
    var selected = this.props.selectedSetting.id === setting.id
    var activeStyle = {
      backgroundColor: 'blue',
      color: 'white'
    };

    return (
        <li>
          <button
            onClick={this.selectSetting}
            style={selected ? activeStyle : null}>

            {setting.title}

          </button>
        </li>
    )
  }
}



export default PageSetting;
