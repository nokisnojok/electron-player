const React = require('react');
const {Component} =require('react')
const { remote } =require('electron');
const VideoControl =require('./videoControl.js')
const VideoPlayer =require('./videoPlayer.js')
const Meau=require('./Meau.js')
const videoList=require('../../main-process-js/default.js')

const BrowserWindow = remote.BrowserWindow
module.exports=class extends Component {
	constructor(props) {
        super(props)
        global.t=this
        this.state={
            videoList:videoList,
            currentVideo:{},
            progress: 0,
            volume: 0.3,
            muted: true,
            paused: true,
            currentTime: 0,
            duration: 0,
            listShow: true
        }
    }
    componentDidMount(){
        this.refs.vPlayer.setVolume(this.state.volume)
        this.refs.vPlayer.on('play',(e)=>{
            this.setState({paused:e.target.paused})
        })
        this.refs.vPlayer.on('pause',(e)=>{
            this.setState({paused:e.target.paused})
        })
        this.refs.vPlayer.on('ended',(e)=>{
            var videoList=this.state.videoList
            if(videoList.length>0){
                var index=(videoList.indexOf(this.state.currentVideo)+1)%videoList.length
                this.refs.vPlayer.playSrc(videoList[index].path,(e)=>{
                    this.setState({currentVideo:videoList[index]})
                })
            }
        })
        this.refs.vPlayer.on('volumechange',(e)=>{
            var video=e.target
            this.setState({
                volume:video.volume,
                muted:video.muted
            })
        })
        this.refs.vPlayer.on('timeupdate',(e)=>{
            var video=e.target
            this.setState({
                duration:isNaN(video.duration)?0:video.duration,
                currentTime:video.currentTime,
                progress: video.currentTime/video.duration
            })
        })
        document.ondragover=function(e){
            e.preventDefault()
            return false
        }
        document.ondrop=(e)=>{
            e.preventDefault()
            var files=e.dataTransfer.files
            var objs=Array.prototype.map.call(files,function(file){
                console.log(file.name)
                console.log(file.path)
            })
        }
    }
    MeauVisiableHandle(){
        this.setState({listShow:!this.state.listShow})
    }
    playItem(item){
        item==this.state.currentVideo||this.refs.vPlayer.playSrc(item.path,()=>{
            this.setState({currentVideo:item})
        })
    }
	render() {
		return (
            <div style={{transition:'all 0.3s',width:'100%',height:'100%','paddingRight':this.state.listShow?'200px':'0px'}}>
                <VideoControl ref='vControl'
                    playHandle={()=>{
                        if('title' in this.state.currentVideo){
                            this.state.paused?this.refs.vPlayer.play():this.refs.vPlayer.pause()
                        }else{
                            this.refs.vPlayer.playSrc(this.state.videoList[0].path,()=>{
                                this.setState({currentVideo:this.state.videoList[0]})
                            })
                        }   
                    }}
                    progressHandle={(e)=>{
                        //for(var a in e) if(typeof e[a] !='function') console.log(a,e[a])
                        var left=e.clientX-e.currentTarget.offsetLeft
                        var width=e.currentTarget.offsetWidth
                        console.log(this.refs.vPlayer.setCurrentTime(left/width*this.state.duration))
                    }}
                    muteHandle={(e)=>{
                        this.refs.vPlayer.mute(!this.state.muted)
                    }}
                    volumeHandle={(e)=>{
                        var left=e.clientX-e.currentTarget.offsetLeft
                        var width=e.currentTarget.offsetWidth
                        this.refs.vPlayer.setVolume(left/width)
                    }}
                    paused={this.state.paused}
                    progress={this.state.progress}
                    muted={this.state.muted}
                    volume={this.state.volume}
                    currentTime={this.state.currentTime}
                    duration ={this.state.duration}
                >
                    <VideoPlayer  ref='vPlayer'/>
                </VideoControl>
                <Meau
                    styleObj={{right:this.state.listShow?'0px':'-201px'}}
                    addVideoItem={''}
                    itemClick={''}
                    deleteItem={''}
                    playItem={this.playItem.bind(this)}
                    listShowHanle={this.MeauVisiableHandle.bind(this)}
                    lists={this.state.videoList}
                    currentVideo={this.state.currentVideo}
                />
            </div>
        )
	}
}