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
    
  }

  render() {
    return (
      <div
        style={{position:'relative',zIndex:'99'}}
      >
        <Video
          styleObj={{}}
        >
        </Video>
        <List
          styleObj={{width:'200px',position:'absolute',right:'0px',top:'0px','background':'rgba(105,105,105,0.4)'}}
        >

        </List>
      </div>
    );
  }
}