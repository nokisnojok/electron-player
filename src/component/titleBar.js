const React = require('react');
const {Component} =require('react')
const { TitleBar } =require('react-desktop/windows');
const { remote } =require('electron');
const BrowserWindow = remote.BrowserWindow
var header=document.getElementById('header')
function body_mousemove(timer){
  return function(e){
    clearTimeout(timer)
    header.style.top='0px'
    timer=setTimeout(function(){
      header.style.top='-31px'
    },3000)
  }
}


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
      console.log(e)
      this.setState({isMaximized:true})
    })
    win.on('unmaximize',(e)=>{
      console.log(e)
      this.setState({isMaximized:false})
    })
    
    var timer;
    win.on('enter-full-screen',(e)=>{
      document.body.onmousemove=null
      clearTimeout(timer)
      header.style.top='-31px'
    })
    win.on('leave-full-screen',(e)=>{
      document.body.onmousemove=body_mousemove(timer)
      console.log('leave-full-screen')
      console.log(e)
      clearTimeout(timer)
      header.style.top='0px'
      timer=setTimeout(function(){
        header.style.top='-31px'
      },3000)
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
    console.log('minimize');
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