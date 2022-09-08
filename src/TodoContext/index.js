import React from "react";
import { useLocalStorage } from './useLocalStorage'

const TodoContext = React.createContext()

function TodoProvider(props){
    const{
        item:todos,
        saveItem:saveTodos,
        loading,
        error
      }= useLocalStorage('TODOS_V1',[]);
      
      
      
      
        
         /* Se crea un estado en la variable searchValue que se inicilaiza con un String vacío y con la funcion setSearchValue
          podemos actualizar este valor o estado  */
          const [searchValue, setSearchValue] = React.useState('')
          const [openModal, setOpenModal] = React.useState(false)
          //Verifica cuantos todos en el array de todos tienen como true la propiedad completed
          const completedTodos = todos.filter(todos => !! todos.completed).length
          const totalTodos = todos.length
      
          let searchedTodos = [];
          /* Si la searchedTodos es igual a 0 vamos a mostrar la lista por defecto */
          if (!searchValue.length >= 1) {
            searchedTodos = todos
          } else {searchedTodos = todos.filter(todo => {
               const todoText = todo.text.toLowerCase()
               const searchText = searchValue.toLowerCase()
               return todoText.includes(searchText)}
            
            )}
      
           
           
          const completeTodo = (text) => {
            const todoIndex = todos.findIndex(todo => todo.text == text)
            const newTodos = [...todos]
            newTodos[todoIndex].completed = true
            saveTodos(newTodos)
            // todos[todoIndex] = {
            //   text: todos[todoIndex].text,
            //   completed: true,
            // }
          }
           
          const addTodo = (text) => {
           
            const newTodos = [...todos]
            newTodos.push({
              completed: false,
              text,

            })
            saveTodos(newTodos)
            // todos[todoIndex] = {
            //   text: todos[todoIndex].text,
            //   completed: true,
            // }
          }

          const deleteTodos = (text) => {
            const todoIndex = todos.findIndex(todo => todo.text == text)
            const newTodos = [...todos]
            newTodos.splice(todoIndex, 1)
            saveTodos(newTodos)
            // todos[todoIndex] = {
            //   text: todos[todoIndex].text,
            //   completed: true,
            // }
          }
          /* El hook de efecto en react nos permite ejecutar un pedazo de código cada vez que necesitemos, a lo largo de la vida de nuestro componente, también cuando se cumplan ciertas condiciones.
      
          Algo curioso e importante de saber es que el código dentro de nuestro hook de efecto no se    ejecuta como el resto del código, se ejecutará inicialmente justo antes de 
          hacer el   renderizado del HTML que resulte de nuestro código de React. */
      
          /* console.log(' Render antes');
          
      
          React.useEffect(()=> {
            console.log('use effect');
            //Vamos a escuchar en el efecto todas las veces que halla cambio en total todos
          }, [totalTodos])
      
          console.log(' Render antes'); */
    return(
        <TodoContext.Provider value={{
            loading,
            error ,
            totalTodos ,
            completedTodos ,
            searchValue ,
            setSearchValue ,
            searchedTodos ,
            completeTodo ,
            deleteTodos ,
            addTodo,
            openModal,
            setOpenModal 

        }}>
            {props.children}
        </TodoContext.Provider>
    )

}

export { TodoContext, TodoProvider};