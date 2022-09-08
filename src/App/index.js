import React from 'react'
import { AppUI } from './AppUI'
import { TodoProvider } from '../TodoContext'
// import './App.css';
// const defaultTodos = [
//   {text:'Cortar cebolla', completed: true},
//   {text:'Tomar el cursod e intro a React', completed: false},
//   {text:'Llorar con la llorona', completed: false},
//   {text:'LLALALALALALALALALAL', completed: false}
// ]




// Este es un componente 
function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  )
  
}

export default App;
