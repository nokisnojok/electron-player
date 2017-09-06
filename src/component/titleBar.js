const React = require('react');
const {Component} =require('react')
const { remote } =require('electron');
const BrowserWindow = remote.BrowserWindow


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
    // win.on('enter-full-screen',(e)=>{
    //   body.style.top='0px'
    //   header.style.display='none'
    // })
    // win.on('leave-full-screen',(e)=>{
    //   body.style.top='31px'
    //   header.style.display='block'
    // })
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
    })
    e.currentTarget.dispatchEvent(evt)
    var win=BrowserWindow.getFocusedWindow()
    win.minimize()
  }
  toggleMaximize =()=>{
    var win=BrowserWindow.getFocusedWindow()
    if(win.isMaximized()){
      win.unmaximize()
    }else{
      win.maximize()
    }
    console.log(this.state)
  }
  render() {
    return (
      <div className='titlebar'>
	      <div className='appname'>
          {this.props.title||'App'}
      	</div>
	      <div className='control'>
		    <a title="Minimize" onClick={this.minimize}>
			    <svg x="0px" y="0px" viewBox="0 0 10.2 1" >
				    <rect fill="rgba(0, 0, 0, .4)" width="10.2" height="1"></rect>
			    </svg>
        </a>
        <a title="Maximize" onClick={this.toggleMaximize}>
          <svg x="0px" y="0px" viewBox="0 0 10.2 10.1" >
            <path fill="rgba(0, 0, 0, .4)" d={this.state.isMaximized?"M2.1,0v2H0v8.1h8.2v-2h2V0H2.1z M7.2,9.2H1.1V3h6.1V9.2z M9.2,7.1h-1V2H3.1V1h6.1V7.1z":"M0,0v10.1h10.2V0H0z M9.2,9.2H1.1V1h8.1V9.2z"}></path>
          </svg>
        </a>
        <a title="Close" onClick={this.close}>
          <svg x="0px" y="0px" viewBox="0 0 10.2 10.2">
            <polygon fill="rgba(0, 0, 0, .4)" points={"10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1 "}></polygon>
          </svg>
        </a>
        </div>
      </div>
    );
  }
}