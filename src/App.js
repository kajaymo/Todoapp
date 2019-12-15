import React, { Component } from 'react'
import Header from './Components/Layout/Header'
import Todo from './Components/Todo'
import {Row, Col} from 'antd'
// import TodoItem from './Components/TodoItem'

class App extends Component {
  state={
    todos:[
    {
        id:1,
        name:"John",
        title:"learning states",
        completed: false
    },
    {
        id:2,
        name:"Vishwas",
        title:"meeting with boss",
        completed: false
    },
    {
        id:3,
        name:"Travis",
        title:"teaching states",
        completed: false
    },
    {
      id:3,
      name:"Travis",
      title:"teaching states",
      completed: false
  },
  {
    id:4,
    name:"Travis",
    title:"teaching states",
    completed: false
},
{
  id:5,
  name:"Travis",
  title:"teaching states",
  completed: false
},
{
  id:6,
  name:"Travis",
  title:"teaching states",
  completed: false
},
{
  id:7,
  name:"Travis",
  title:"teaching states",
  completed: false
},
{
  id:8,
  name:"Travis",
  title:"teaching states",
  completed: false
}
,
{
  id:9,
  name:"Travis",
  title:"teaching states",
  completed: false
}
]
    
}
markComplete = (id)=>{
  this.setState({todos:this.state.todos.map(todo=>{
    if(todo.id === id) {
      todo.completed = !todo.completed
    }
      return todo;
  }
    )});
}
//Delete Todo
delTodo=(id)=>{
  console.log(id)
}
  render() {
    return (
      <div className="container">
         <Row>
      <Col span={8} offset={8}>
      <Header/>
        <Todo todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        {/* <TodoItem/> */}
      </Col>
    </Row>
        
      </div>
    )
  }
}

export default App
