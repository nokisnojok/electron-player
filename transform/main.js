const { ipcRenderer } = global.require('electron');
const React = require('react');
const ReactDOM = global.require('react-dom');
const TitleBar = require('./component/titleBar.js');
const Body = require('./component/Body.js');
ReactDOM.render(React.createElement(TitleBar, { name: 'Player' }), document.getElementById('header'));

ReactDOM.render(React.createElement(Body, null), document.getElementById('main'));