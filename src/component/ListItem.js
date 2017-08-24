const React = require('react');
const {Component} =require('react')


module.exports=class extends Component {
    render(){
        var item=this.props.item
        return (
            <li 
                onClick={()=>{
                    this.props.playItem.call(null,this.props.item)
                }}
                className={`${this.props.focus?'focus':''}`} title={item.title}>
                <p>
                    {item.name}
                </p>
            </li>
        )
    }
}