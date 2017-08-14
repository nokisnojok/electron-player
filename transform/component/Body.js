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
    console.log(this.props);
    this.state = {
      listshow: false
    };
  }
  listShowOrHidden() {
    this.setState({ listshow: !this.state.listshow });
    console.log(this.state);
  }

  render() {
    return React.createElement(
      'div',
      { className: 'bodyComponent', style: { transition: 'all 0.3s', width: '100%', height: '100%', 'paddingRight': this.state.listshow ? '200px' : '0px' }
      },
      React.createElement(Video, {
        styleObj: {}
      })
    );
  }
}, _class.defaultProps = {
  color: 'RGBA(189,189,189,0.4)',
  theme: 'light'
}, _temp);