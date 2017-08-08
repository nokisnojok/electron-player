var _class, _temp, _initialiseProps;

const React = require('react');
const { Component } = require('react');
const { TitleBar } = require('react-desktop/windows');
const { remote } = require('electron');
const BrowserWindow = remote.BrowserWindow;
var header = document.getElementById('header');
function body_mousemove(timer) {
  return function (e) {
    clearTimeout(timer);
    header.style.top = '0px';
    timer = setTimeout(function () {
      header.style.top = '-31px';
    }, 3000);
  };
}

module.exports = (_temp = _class = class extends Component {

  constructor(props) {
    super(props);

    _initialiseProps.call(this);

    var win = BrowserWindow.getAllWindows()[0];
    this.state = { isMaximized: win.isMaximized() };
    win.on('maximize', e => {
      console.log(e);
      this.setState({ isMaximized: true });
    });
    win.on('unmaximize', e => {
      console.log(e);
      this.setState({ isMaximized: false });
    });

    var timer = setTimeout(function () {
      header.style.top = '-31px';
    }, 5000);
    win.on('enter-full-screen', e => {
      document.body.onmousemove = null;
      console.log('enter-full-screen');
      console.log(e);
      clearTimeout(timer);
      header.style.top = '-31px';
    });
    win.on('leave-full-screen', e => {
      document.body.onmousemove = body_mousemove(timer);
      console.log('leave-full-screen');
      console.log(e);
      clearTimeout(timer);
      header.style.top = '0px';
      timer = setTimeout(function () {
        header.style.top = '-31px';
      }, 3000);
    });
    document.body.onmousemove = body_mousemove(timer);
  }


  render() {
    return React.createElement(TitleBar, {
      title: this.props.name,
      controls: true,
      isMaximized: this.state.isMaximized,
      theme: this.props.theme,
      background: this.props.color,
      onCloseClick: this.close,
      onMinimizeClick: this.minimize,
      onMaximizeClick: this.toggleMaximize,
      onRestoreDownClick: this.toggleMaximize
    });
  }
}, _class.defaultProps = {
  color: 'RGBA(189,189,189,0.4)',
  theme: 'light'
}, _initialiseProps = function () {
  this.close = function () {
    var win = BrowserWindow.getFocusedWindow();
    win.close();
  };

  this.minimize = function (e) {
    var evt = new MouseEvent("mouseout", {
      bubbles: true,
      cancelable: true,
      view: global
    });
    e.currentTarget.dispatchEvent(evt);
    var win = BrowserWindow.getFocusedWindow();
    win.minimize();
    console.log('minimize');
  };

  this.toggleMaximize = function () {
    var win = BrowserWindow.getFocusedWindow();
    if (win.isMaximized()) {
      win.unmaximize();
    } else {
      win.maximize();
    }
  }.bind(this);
}, _temp);