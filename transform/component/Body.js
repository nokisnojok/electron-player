var _class, _temp;

const React = require('react');
const { Component } = require('react');
const { remote } = require('electron');
const Video = require('./Video.js');
const List = require('./List.js');
const BrowserWindow = remote.BrowserWindow;

module.exports = (_temp = _class = class extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      'div',
      {
        style: { position: 'relative', zIndex: '99' }
      },
      React.createElement(Video, {
        styleObj: {}
      }),
      React.createElement(List, {
        styleObj: { width: '200px', position: 'absolute', right: '0px', top: '0px', 'background': 'rgba(105,105,105,0.4)' }
      })
    );
  }
}, _class.defaultProps = {
  color: 'RGBA(189,189,189,0.4)',
  theme: 'light'
}, _temp);