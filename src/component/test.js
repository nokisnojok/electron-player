const React = require('react');
const {Component} =require('react')
const { remote } =require('electron');

const BrowserWindow = remote.BrowserWindow
class T extends Component {
	constructor(props ,context) {
        super(props);
        console.log('constructor')
        console.log(props)
        console.log(context)
        global.t2=this
        this.state={
            src:'./video/Adele-Rolling-in-the-Deep.mp4',
            width:'400px'
        }
    }
    
    componentWillMount(){
        console.log('componentWillMount')
        console.log('ref',this.refs)
    }
	componentDidMount(){
        console.log('componentDidMount')
        console.log('ref',this.refs)
    }

    componentWillReceiveProps(nextProps,nextState){
        console.log('componentWillReceiveProps')
        console.log('nextProps',nextProps)
        console.log('nextState',nextState)
        return true
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate')
        console.log('nextProps',nextProps)
        console.log('nextState',nextState)
        return true
    }
	render() {
        console.log('render')
		return (
			<div ref='r'>
                <video ref='v' src={this.props.src} width={this.state.width} height='320xp' controls></video>
				<p>{this.props.name}</p>
                {this.props.children}
			</div>
		);
	}
}
module.exports=class extends Component {
	constructor(props ,context) {
        super(props);
       this.state={
           name:'hehehe'
       }
       global.t1=this
	}
	componentDidMount(){
    }
    
	render() {
		return (
			<div id='videoPlayer'>
				<T name={this.state.name} src='./video/Adele-Rolling-in-the-Deep.mp4'>
                    <a>a</a>
                </T>
			</div>
		);
	}
}