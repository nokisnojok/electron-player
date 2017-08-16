const React = require('react');
const {Component} =require('react')
const { remote } =require('electron');

const BrowserWindow = remote.BrowserWindow
module.exports=class extends Component {
	constructor(props) {
		super(props);
		global.video=this
		this.state={
			vid:'',
			paused: true,
			volume: 0.3,
			muted: false,
			progress: 0,
			currentTime:'0',
			duration:'0'
		}
	}
	componentDidMount(){
		console.log(this.props)
		// if(this.props.src!=''&&this.props){
		// 	console.log(this.props.src)
		// 	this.play(this.props.src)
		// }
		this.bindEle(document.getElementById('player'))
	}
	// componentWillReceiveProps(props){
	// 	if(props.src!=''){
	// 		this.play(props.src)
	// 	}
	// }
	// shouldComponentUpdate(nextProps,nextState){
	// 	console.log('should..')
	// 	console.log(nextProps)
	// 	console.log(nextState)
	// 	return true;
	// }
	test(v,cb){
		var vELe=document.getElementById('player')
		if(typeof v == 'string'){
			vELe.src=v
			vELe.onerror=function(e){
				this.onerror=null
				vELe.src=''
				cb&&cb(false)
			}
			vELe.oncanplay=(e)=>{
				cb&&cb(true)
			}
		}else if(typeof v == 'object'&&video.constructor===HTMLVideoElement){
			var self=this
			if(!v.paused){
				this.bindEle(v)
			}else{
				v.play().then(()=>{
					v.pause()
					this.bindEle(v)
				},()=>{
					console.log('it cant play')
				})
			}
		}else if(typeof v == 'undefined'){
			cb&&cb(false)
		}else{
			cb&&cb(false)
		}
	}
	play(v){
		var vELe=document.getElementById(this.state.vid)
		var ele=document.getElementById(this.state.vid)
		if(typeof v == 'string'){
			console.log('do this.paly')
			vELe.src=v
		}else if(typeof v == 'object'&&v.constructor.name=='HTMLVideoElement'){
			console.log('video element')
			var self=this
			if(!v.paused){
				this.bindEle(v)
			}else{
				v.play().then(()=>{
					v.pause()
					this.bindEle(v)
				},()=>{
					console.log('it cant play')
				})
			}
		}else if(typeof v == 'undefined'){
			document.getElementById(this.state.vid).play().then(()=>{
				//this.setState({paused:false})
			},()=>{})
			console.log(vELe.readyState)
		}else{
			console.log('what is this')
		}
	}
	pause(){
		if(!this.state.paused){
			document.getElementById(this.state.vid).pause()
		}
	}
	unbindEle(ele){
		if(!ele.paused){
			ele.pause()
			this.setState({paused:true})
		}
		ele.ontimeupdate=ele.onloadstart=ele.onloadeddata=ele.onloadmetadata=ele.ondurationchange=ele.onprogress=ele.oncanplay=ele.onended=ele.onerror=ele.onpause=ele.onplay=null
		ele.ontimeupdate=null
		ele.onended=null
		ele.onerror=null
		ele.onpause=null
		ele.onplay=null
		ele.onvolumechange=null
	}
	bindEle(ele){
		//解绑
		console.log('bindEle')
		if(this.state.vid!='')
			this.unbindEle(document.getElementById(this.state.vid))
		//更改声音大小
		ele.volume=this.state.volume;
		//绑定id
		if(ele.id==''||(document.getElementById(ele.id)!= null&&document.getElementById(ele.id)!=ele)){
			var now=new Date()
			ele.id=now.getTime()+''
		}
		this.setState({vid:ele.id})
		//绑定播放状态
		if(ele.paused){
			this.setState({paused:true})
		}else{
			this.setState({paused:true})
		}
		//绑定时间
		this.setState({duration:isNaN(ele.duration)?0:ele.duration})
		//绑定事件
		self=this
		ele.onpause=function(e){
			console.log(e)
			self.setState({paused:this.paused})
		}
		ele.onplay=function(e){
			console.log(e)
			self.setState({paused:this.paused})
		}
		ele.ontimeupdate=function(e){
			//console.log(e)
			if(isNaN(this.duration)){
				return
			}
			self.setState({currentTime:this.currentTime})
			self.setState({progress:this.currentTime/this.duration})
		}
		ele.ondurationchange=function(e){
			console.log(e)
			self.setState({currentTime:this.currentTime})
			self.setState({duration:this.duration})
			self.setState({progress:this.currentTime/this.duration})
			self.setState({paused:this.paused})
		}
		ele.onended=function(e){
			console.log(e)
			self.setState({paused:true})
		}
		ele.onerror=function(e){
			console.log(e)
			self.setState({paused:true})
			self.setState({currentTime:this.currentTime})
			self.setState({duration:0})
			self.setState({progress:0})
			self.setState({paused:this.paused})
		}
		ele.onvolumechange=function(e){
			console.log(e)
			if(this.volume==0||this.muted){
				self.setState({muted:true})
			}else{
				self.setState({muted:false})
			}
			self.setState({volume:this.volume})
		}
		//append node
		document.getElementById('playerContent').appendChild(ele)
	}

	playHandle(){
		var ele=document.getElementById(this.state.vid)
		if(ele.paused){
			this.play()
		}else{
			this.pause()
		}
	}
	muteHandle(){
		var ele=document.getElementById(this.state.vid)
		if(ele.muted){
			ele.muted=false
		}else{
			ele.muted=true
		}
	}
	volumeHandle(e){
		var ele=document.getElementById(this.state.vid)
		var volumeEle=document.getElementById('volume')
		var width=volumeEle.offsetWidth
		var left=e.clientX-volumeEle.offsetLeft
		if(left!=0){
			ele.muted=false
		}
		ele.volume=left/width
	}

	progressHandle(e){
		var ele=document.getElementById(this.state.vid)
		var progressEle=document.getElementById('progress')
		var width=progressEle.offsetWidth
		var left=e.clientX-progressEle.offsetLeft
		if(ele.duration==0||isNaN(ele.duration))
			return
		ele.currentTime=left/width*ele.duration
	}
	formatTime(second){
		var min=parseInt(second/60);
		var sec=parseInt(second)%60>9?parseInt(second)%60:'0'+parseInt(second)%60;
		return min+':'+sec
	}
	render() {
		return (
			<div id='playerContent'>
				<video ref='v' id='player' width="100%" src="">
				</video>
				<div id='playerControl'>
					<div className='play-progress' id='progress' onClick={this.progressHandle.bind(this)}>
						<div style={{width:this.state.progress*100+'%'}} id='progress-left'></div>
					</div>
					<button className='play-btn' onClick={this.playHandle.bind(this)}>
						<svg height="100%" version="1.1" viewBox="0 0 30 30" width="100%">
							<use className="ytp-svg-shadow" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#ytp-svg-67"></use>
							{/* <path style={{display:this.state.paused?'none':'inline'}} className="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z" id="ytp-svg-167"></path> */}
							<path className="ytp-svg-fill" d={!this.state.paused?"M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z":"M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"} id="ytp-svg-67"></path> 
						</svg>
					</button>
					<div className='play-time' id='time'><div id='current'>{this.formatTime(this.state.currentTime)}</div>/<div id='duration'>{this.formatTime(this.state.duration)}</div></div>
					<button className='play-mute' id="mute" onClick={this.muteHandle.bind(this)}>
						<svg width="100%" height="100%" version="1.1" viewBox="0 0 36 36" >
						<use className="ytp-svg-shadow" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#ytp-svg-13"></use>
						<use className="ytp-svg-shadow" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#ytp-svg-14"></use>
						<path className="ytp-svg-fill" clipPath="url(#ytp-svg-volume-animation-mask)" d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z" fill="#fff" id="ytp-svg-13"></path>
						<path className="ytp-svg-fill" style={{opacity:(this.state.muted||this.state.volume==0)?'1':'0'}} d={!(this.state.muted||this.state.volume==0)?"M 9.25,9 7.98,10 7.98,10 l 0,0 Z":"M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z"} fill="#8CEA00" id="ytp-svg-14"></path>
						</svg>
					</button>
					<div className='play-volume' id="volume" onClick={this.volumeHandle.bind(this)}>
						<div style={{width:this.state.muted?'0px':this.state.volume*100+'%'}} id='volumeleft'></div>
					</div>
					<button className='play-fullscreen' id='fullscreen'>
						<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
							<g>
								<use className="ytp-svg-shadow" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#ytp-svg-90"></use>
								<path className="ytp-svg-fill" d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z" id="ytp-svg-90"></path>
							</g>
							<g>
								<use className="ytp-svg-shadow" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#ytp-svg-91"></use>
								<path className="ytp-svg-fill" d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z" id="ytp-svg-91"></path>
							</g>
							<g>
								<use className="ytp-svg-shadow" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#ytp-svg-92"></use>
								<path className="ytp-svg-fill" d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z" id="ytp-svg-92"></path>
							</g>
							<g>
								<use className="ytp-svg-shadow" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#ytp-svg-93"></use>
								<path className="ytp-svg-fill" d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z" id="ytp-svg-93"></path>
							</g>
						</svg>
					</button>
				</div>
			</div>
		);
	}
}