const React = require('react');
const {Component} =require('react')
const { TitleBar } =require('react-desktop/windows');
const { remote } =require('electron');
const BrowserWindow = remote.BrowserWindow
var header=document.getElementById('header')
var body=document.getElementById('body')


module.exports=class extends Component {
  static defaultProps = {
    color: 'RGBA(189,189,189,0.4)',
    theme: 'light'
  };
  
  constructor(props) {
    super(props);
    var win=BrowserWindow.getAllWindows()[0]
    this.state = { isMaximized: win.isMaximized() };
    win.on('maximize',(e)=>{
      this.setState({isMaximized:true})
    })
    win.on('unmaximize',(e)=>{
      this.setState({isMaximized:false})
    })
    
    var timer;
    win.on('enter-full-screen',(e)=>{
      body.style.top='0px'
      header.style.display='none'
    })
    win.on('leave-full-screen',(e)=>{
      body.style.top='31px'
      header.style.display='block'
    })
  }
  close = function(){
    var win=BrowserWindow.getFocusedWindow()
    win.close()
  }
  minimize = function(e){
    var evt = new MouseEvent("mouseout", {
      bubbles: true,
      cancelable: true,
      view: global,
    });
    e.currentTarget.dispatchEvent(evt)
    var win=BrowserWindow.getFocusedWindow()
    win.minimize()
  }
  toggleMaximize =function(){
    var win=BrowserWindow.getFocusedWindow()
    if(win.isMaximized()){
      win.unmaximize()
    }else{
      win.maximize()
    }
  }.bind(this)

  render() {
    return (
      <TitleBar
        title={this.props.name}
        controls={true}
        isMaximized={this.state.isMaximized}
        theme={this.props.theme}
        background={this.props.color}
        onCloseClick={this.close}
        onMinimizeClick={this.minimize}
        onMaximizeClick={this.toggleMaximize}
        onRestoreDownClick={this.toggleMaximize}
      />
    );
  }
}