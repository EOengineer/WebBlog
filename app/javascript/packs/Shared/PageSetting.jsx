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

    return (
          <button
            className={selected ? "btn btn-primary" : "btn btn-default"}
            onClick={this.selectSetting} >

            {setting.title}
          </button>
    )
  }
}



export default PageSetting;
