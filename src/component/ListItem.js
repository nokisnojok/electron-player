const React = require('react');
const {Component} =require('react')


module.exports=class extends Component {
    componentDidMount(){
        this.refs.item.addEventListener('click',function(e){
        },false)
    }
    render(){
        var item=this.props.item
        return (
            <li ref='item'
                onClick={(e)=>{
                    e.stopPropagation()
                    setTimeout((e)=>{
                        this.props.playItem.call(null,this.props.item)
                    },300)
                }}
                onDoubleClick={(e)=>{
                    return
                }}
                className={`${this.props.focus?'focus':''} btn`} title={item.title}
            >
                <p>
                    {item.name}
                </p>
                <span></span>
            </li>
        )
    }
}