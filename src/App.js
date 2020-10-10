import React, { Component } from 'react';
import Tab from './Tab';
import Switch from './Switch';
import './styles/main.scss';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isRounded: false
    }
  }

  handleRounding = () => {
    this.setState((prevState) => ({isRounded: !prevState.isRounded}));
  }

  render() {
    const { isRounded } = this.state;
    return (
      <div>
        <Tab label="16:9" hotkey="V" isActive={false}/>
        <Tab label="4:3" hotkey="P" isActive={true}/>
        <Switch isActive={isRounded} clicked={this.handleRounding} title={'roundedSwitch'} />
      </div>
    );
  }
}
