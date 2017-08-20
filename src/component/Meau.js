const React = require('react');
const {Component} =require('react')
const { remote } =require('electron');
const List =require('./List.js')
const BrowserWindow = remote.BrowserWindow

module.exports=class extends Component {
  
  constructor(props) {
    super(props);
    console.log(props)
  }
  test(e){
    console.log(this.props)
    this.props.listClickHandle(e)
  }
  render() {
    return (
      <div style={this.props.styleObj} className='listContent'>
        <div className='listControl' >
        </div>
        <List videoList={this.props.lists} />
        <div className="visibale">
          <div id='list-btn'
            className='visibableBtn'
            onClick={this.props.listShowHanle}
          >

            <svg x="0px" y="0px" viewBox="0 0 20 12.5" data-radium="true" style={{"position": 'absolute', padding:' 8px 10px', top: '15px',left: '0px', width: '20px', height: '20px'}}><path fill={"#000000"}  d={"M0,12.5h20V11H0V12.5z M0,7h20V5.5H0V7z M0,0v1.5h20V0H0z"}></path></svg>
          </div>
        </div>
        

      </div>
    );
  }
}