const { ipcRenderer } = global.require('electron');
const React = require('react');
const ReactDOM = global.require('react-dom');
const TitleBar = require('./component/titleBar.js');
const Body = require('./component/Body.js');
ReactDOM.render(React.createElement(TitleBar, { name: 'Player' }), document.getElementById('header'));

ReactDOM.render(React.createElement(Body, { a: { a: 1 } }), document.getElementById('body'));
function f(e) {
	e.preventDefault();
	//console.log(e)
	return false;
}
document.ondragover = function (e) {
	e.preventDefault();
	//console.log(e)
	return false;
};
document.ondrop = function (e) {
	e.preventDefault();
	console.log(e.dataTransfer);
	console.log(e.dataTransfer.files[0]);
	var file = e.dataTransfer.files[0];
	var oFReader = new FileReader();
	oFReader.onload = function (oFREvent) {
		document.getElementsByTagName('video')[0].src = oFREvent.target.result;
	};
	oFReader.readAsDataURL(file);
	// var url=URL.createObjectURL(file)
	// document.getElementsByTagName('video')[0].src=url
	//console.log(stream)
};