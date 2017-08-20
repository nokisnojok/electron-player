const React = require('react');
const {Component} =require('react')
const ListItem =require('./ListItem.js')


module.exports=class extends Component {
    render(){
        var eles=this.props.videoList.map((item,index)=>{
            return <ListItem key={index} focus={item===this.props.currentVideo} item={item}/>      
        })
        return (
            <ul className='list'>
                {eles}
            </ul>
        )
    }
}