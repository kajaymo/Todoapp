import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todo extends Component  { 
    render() {
        return (
           <div>
                {this.props.todos.map(todo=>  {
                    return(
                        <div key={todo.id} className="container">
                            {/* {todo.title} */}
                            <TodoItem todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
                       
                      </div>
                    )
                })}
            </div>
        )
}

}
// PropTypes
Todo.propType={
    todos: PropTypes.array.isRequired
}


  

export default Todo
