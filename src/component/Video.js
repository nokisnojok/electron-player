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
      <div style={}>
          <video src="" width='100%' height='100%'></video>
      </div>
    );
  }
}