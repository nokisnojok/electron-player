const React = require('react');
const {Component} =require('react')
const { remote } =require('electron');
const Video=require('./Video.js')
const List=require('./List.js')
const BrowserWindow = remote.BrowserWindow

module.exports=class extends Component {

  constructor(props) {
    super(props);
    this.state={
      src:'',
      listshow:true,
      lists:[{
        type:'file',
        name:'frag_bunny.mp4',
        path:'D:/github/electron-player/video/frag_bunny.mp4'
      },{
        type:'file',
        name:'Adele-Rolling-in-the-Deep.mp4',
        path:'D:/github/electron-player/video/Adele-Rolling-in-the-Deep.mp4',
      }]
    }
    document.ondragover=function(e){
      e.preventDefault()
      return false
    }
    document.ondrop=(e)=>{
      e.preventDefault()
      var lists=this.state.lists
      var file=e.dataTransfer.files[0]
      var obj={}
      obj.type='file'
      obj.name=file.name
      obj.path=file.path
      lists.push(obj)
      this.setState({lists:lists})
      console.log(file)
    }
  }
  listShowOrHidden(){
    this.setState({listshow:!this.state.listshow})
    console.log('show or hidden')
  }
  listClickHandle(e){
    console.log('file:///'+e.target.title)
    this.refs.video.play('file:///'+e.target.title)
  }
  render() {
    return (
      <div className='bodyComponent' style={{transition:'all 0.3s',width:'100%',height:'100%','paddingRight':this.state.listshow?'200px':'0px'}}>
        <Video ref='video'>
        </Video>
         <List
          styleObj={{right:this.state.listshow?'0px':'-201px'}}
          listShowHanle={this.listShowOrHidden.bind(this)}
          listClickHandle={this.listClickHandle.bind(this)}
          lists={this.state.lists}
        >
        </List> 
      </div>
    );
  }
}