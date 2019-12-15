import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
    getStyle= ()=> {
        return{
            backgroundColor:"#f4f4f4",
            padding:"10px",
            textDecoration:this.props.todo.completed ?
            "line-through" : "none"
        }
    }
    render() {
        const {id,title}=this.props.todo;
        return ( 
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{''}
                    {title}
                    <button onClick={this.props.delTodo.bind(this,id)}style={btnStyle}>x</button>
                    </p>  
            </div>
        )
    }
}
// PropTypes
TodoItem.propType={
    todo: PropTypes.object.isRequired
}
const btnStyle={
    color:"#f5222d",
    padding:"5px 5px",
    backgroundColor:"#096dd9",
    cursor:"pointer",
    float:"right",
    border:"none",
    borderRadius:"50px"
}
export default TodoItem
