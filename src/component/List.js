const React = require('react');
const {Component} =require('react')
const { remote } =require('electron');

const BrowserWindow = remote.BrowserWindow

module.exports=class extends Component {
  
  constructor(props) {
    super(props);
    console.log(this.props)
  }
  render() {
    return (
      <div style={this.props.styleObj}>
        <div
          style={{height:'30px',width:'100%',borderBottom:'2px solid #666'}}
        >
          <div style={{height:'30px',width:'50%',display:'inline-block',textAlign:'center',borderRight:'1px solid #666'}}>
            播放列表
          </div>
          
          <div style={{height:'30px',width:'50%',display:'inline-block',textAlign:'center'}}>
            添加视频
          </div>
        </div>
        <ul>

        </ul>
        <div id='list-btn'
          style={{backgroundColor:'#999',position:'absolute',width:'30px',height:'60px',top:'50%',left:'-30px',marginTop:'-30px',border:'1px solid #000',borderRight:'0px solid #000'}}
          onClick={this.props.listHander}
        >

          <svg x="0px" y="0px" viewBox="0 0 20 12.5" data-radium="true" style={{"position": 'absolute', padding:' 8px 10px', top: '15px',left: '0px', width: '20px', height: '20px'}}><path fill={"#000000"}  d={"M0,12.5h20V11H0V12.5z M0,7h20V5.5H0V7z M0,0v1.5h20V0H0z"}></path></svg>
        </div>

      </div>
    );
  }
}