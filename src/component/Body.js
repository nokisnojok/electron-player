const React = require('react');
const {Component} =require('react')
const { remote } =require('electron');
const Video=require('./Video.js')
const List=require('./List.js')
const BrowserWindow = remote.BrowserWindow

module.exports=class extends Component {
  static defaultProps = {
    color: 'RGBA(189,189,189,0.4)',
    theme: 'light'
  };
  
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state={
      listshow:false
    }
  }
  listShowOrHidden(){
    this.setState({listshow:!this.state.listshow})
    console.log(this.state)
  }

  render() {
    return (
      <div className='bodyComponent' style={{transition:'all 0.3s',width:'100%',height:'100%','paddingRight':this.state.listshow?'200px':'0px'}}
      >
        <Video
          styleObj={{}}
        >
        </Video>
        {/* <List
          styleObj={{transition:'all 0.3s',width:'200px',position:'absolute',right:this.state.listshow?'0px':'-200px',top:'0px',backgroundColor:'#999',borderLeft:'1px solid #999',zIndex:'99'}}
          listHander={this.listShowOrHidden.bind(this)}
        >
        </List> */}
      </div>
    );
  }
}