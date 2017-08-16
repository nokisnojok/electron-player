const { ipcRenderer } =global.require('electron');
const React = require('react');
const ReactDOM =global.require('react-dom');
const TitleBar =require('./component/titleBar.js');
const Body =require('./component/Body.js');
ReactDOM.render(
	<TitleBar name="Player" />,
	document.getElementById('header')
)

ReactDOM.render(
	<Body a={{a:1}}></Body>,
	document.getElementById('body')
)
function f(e){
	e.preventDefault()
	//console.log(e)
	return false
}
document.ondragover=function(e){
	e.preventDefault()
	//console.log(e)
	return false
}
document.ondrop=function(e){
	e.preventDefault()
	console.log(e.dataTransfer)
	console.log(e.dataTransfer.files[0])
	var file=e.dataTransfer.files[0]
	console.log(file)
}