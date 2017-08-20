const React = require('react');
const {Component} =require('react')


module.exports=class extends Component {
    render(){
        var item=this.props.item
        return (
            <li className={`${this.props.focus?'focus':''}`} title={item.title}>
                {item.name}
            </li>
        )
    }
}