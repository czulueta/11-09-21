import React from "react"

export default function Profile(){
  return(
    <div>
      <h1>Weclome {}</h1>
      <h3>Add a Todo</h3>
      <AuthForm />
      <h3>Your Todos</h3>
      <TodoList />
    </div>
  )
}