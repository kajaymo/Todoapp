import React from 'react'

export default function Header() {
    return (
        <header style={headerStyle}>
          <h1>Todo App</h1>
        </header>
    )
}
const headerStyle={
    color:"#f5222d",
    backgroundColor:"#91d5ff",
    padding:"10px",
    textAlign:"center"
}
