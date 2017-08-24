const React = require('react');
const {Component} =require('react')
const { remote } =require('electron');

const BrowserWindow = remote.BrowserWindow
module.exports=class extends Component {
	constructor(props) {
        super(props)
        this.state=this.props
	}
    componentWillReceiveProps(nextProps){
        
        return true
    }
    shouldComponentUpdate(){
        return true
    }
	formatTime(second){
		var min=parseInt(second/60);
		var sec=parseInt(second)%60>9?parseInt(second)%60:'0'+parseInt(second)%60;
		return min+':'+sec
	}
	render() {
		return (
			<div id='playerContent'>
                {this.props.children}
				<div id='playerControl'>
					<div className='play-progress' id='progress' onClick={this.props.progressHandle}>
						<div style={{width:this.props.progress*100+'%'}} id='progress-left'></div>
					</div>
					<button className='play-btn' onClick={this.props.playHandle}>
						<svg height="100%" version="1.1" viewBox="0 0 30 30" width="100%">
							<use className="ytp-svg-shadow" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#ytp-svg-67"></use>
							{/* <path style={{display:this.state.paused?'none':'inline'}} className="ytp-svg-fill" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z" id="ytp-svg-167"></path> */}
							<path className="ytp-svg-fill" d={!this.props.paused?"M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z":"M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"} id="ytp-svg-67"></path> 
						</svg>
					</button>
					<div className='play-time' id='time'>
                        <div id='current'>{this.formatTime(this.props.currentTime)}</div>
                        /
                        <div id='duration'>{this.formatTime(this.props.duration)}</div>
                    </div>
					<button className='play-mute' id="mute" onClick={this.props.muteHandle}>
						<svg width="100%" height="100%" version="1.1" viewBox="0 0 36 36" >
						<use className="ytp-svg-shadow" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#ytp-svg-13"></use>
						<use className="ytp-svg-shadow" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#ytp-svg-14"></use>
						<path className="ytp-svg-fill" clipPath="url(#ytp-svg-volume-animation-mask)" d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z" fill="#fff" id="ytp-svg-13"></path>
						<path className="ytp-svg-fill" style={{opacity:(this.props.muted||this.props.volume==0)?'1':'0'}} d={!(this.state.muted||this.state.volume==0)?"M 9.25,9 7.98,10 7.98,10 l 0,0 Z":"M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z"} fill="#8CEA00" id="ytp-svg-14"></path>
						</svg>
					</button>
					<div className='play-volume' id="volume" onClick={this.props.volumeHandle} ref='volume'>
						<div style={{width:this.props.muted?'0px':this.props.volume*100+'%'}} id='volumeleft'></div>
					</div>
					{/* <button className='play-fullscreen' id='fullscreen'>
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
					</button> */}
				</div>
			</div>
		);
	}
}