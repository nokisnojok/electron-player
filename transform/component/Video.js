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
      { style: { position: 'relative', zIndex: '1' } },
      React.createElement('video', { controls: true, src: '', width: '100%', height: '100%', style: { backgroundColor: '#000' } })
    );
  }
};