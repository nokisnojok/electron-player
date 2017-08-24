const React = require('react');
const {Component} =require('react')
const { remote } =require('electron');
const path = require('path');
const url = require('url');

const BrowserWindow = remote.BrowserWindow
var arr=['timeupdate','play','pause','ended','canplay','canplaythrough','progress','onratechange','volumechange','waiting','readystatechange']
module.exports=class extends Component {
	constructor(props) {
		super(props);
    }
    componentWillMount(){

    }
	componentDidMount(){
    }
    componentWillReceiveProps(){
        return true
    }
    shouldComponentUpdate(){
        return true
    }
	on(type,cb){
        if(typeof type !='string'){
            console.log(new Error(`this first argument must be a string`))
            return
        }else if(arr.indexOf(type)==-1){
            console.log(new Error(`Without this event:${type}`))
            return
        }
        this.refs.v['on'+type]=function(e){
            cb(e)
        }
    }
    playSrc(src,suc,err){
        var src=url.format({
            pathname:src,
            protocol:'file:',
            slashes:true
        })
        this.refs.v.src=src
        this.refs.v.play().then(suc,err)
    }
    test(src,cb){
        this.refs.v.src=src
        this.refs.v.play().then(function(){
            this.refs.v.pause()
            cb(null)
        },function(e){
            cb(e)
        })
    }
    play(suc,err){
        try{
            this.refs.v.play().then(suc,err)
        }catch(e){
            throw e
        }
        return this.refs.v.paused
    }
    pause(){
        this.refs.v.pause()
        return this.refs.v.paused
    }
    setVolume(v){
        v=parseFloat(v)
        if(v>1){
            this.refs.v.volume=v/100
        }else{
            this.refs.v.volume=v
        }
        return this.refs.volume
    }
    mute(flag){
        if(flag){
            v.muted=true
            return true
        }else{
            v.muted=false
            return false
        }  
    }
	render() {
		return (
            <video ref='v' id='player' width="100%" height="100%" src="">
            </video>
		);
	}
}