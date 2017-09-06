const { ipcRenderer } =global.require('electron');
const React = require('react');
const ReactDOM =global.require('react-dom');
const TitleBar =require('./component/titleBar.js');
const VideoManeger =require('./component/videoManeger.js');
const Test =require('./component/test.js');
ReactDOM.render(
	<TitleBar title="Player" />,
	document.getElementById('header')
)

ReactDOM.render(
	<VideoManeger></VideoManeger>,
	document.getElementById('body')
)