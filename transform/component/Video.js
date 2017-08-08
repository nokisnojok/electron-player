const React = require('react');
const { Component } = require('react');
const { remote } = require('electron');

const BrowserWindow = remote.BrowserWindow;

module.exports = class extends Component {

  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return React.createElement(
      'div',
      { style: { margin: '0', padding: '0', width: '100%', height: '100%' } },
      React.createElement('video', { src: '', width: '100%', height: '100%' })
    );
  }
};