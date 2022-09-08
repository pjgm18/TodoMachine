import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { TodoContext } from '../TodoContext';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { Modal } from '../modal';
import { TodoForm } from "../TodoForm";


function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo, 
        deleteTodos,
        openModal,
        setOpenModal,
        } = React.useContext(TodoContext)
    return(
         //React para sus calculos internos solo necesita que enviemos una etiqueta por componente
    //Cuando tengamos que enviar varias etiquetas, elementos o componentes dentro de unmismo componente podemos envolverlas 


  <React.Fragment > 

  <TodoCounter
   
  
  />
  
  <TodoSearch
    /* Le estamos enviando las propiedades del estado al componente TodoSearch op */
    
  />

 {/*  Dentro de la lista de todos vamos a iterar la lista de los elementos que estan el el arreglo
  de todos */}

  
         <TodoList>

{error && <p>Desesperate... hubo un error</p>}
{loading && <p>Estamos cargando, no desesperes....</p>}
{(!loading && !searchedTodos.length) &&  <p>Crea tu primer todo</p>}
{/* llamamos al Array de todos y llamamos a su metodo .map para que por cada uno de los todos que esten en la lista de todos podamos renderizar una vez nuestro TodoItem*/}

{/* Este es el contenido que se le enviara a la etiqueta children establecidaen el componente TodoList */}
{searchedTodos.map(todo =>(
  /* Cuando renderizamos los elementos que estan dentro de un arreglo hay que enviarle al componente una propiedad que se llama key, esto para que reacrt pueda identificar cual elemento es cual dentro de una lista. Para esto se le envia un identificador uncio que en este caso es el texto ya que no vamos a tener dos todos con el mismo texto*/
  <TodoItem 
  key = {todo.text}
  text = {todo.text}
  completed ={todo.completed}
  onComplete = {()=> completeTodo(todo.text)}
  onDelete = {()=> deleteTodos(todo.text)}

  />
  ))}
</TodoList>

    {/* Preguntamos si existe openModal y  es true o sin los signos de admiracion {openModal && } */}
  {!!openModal && (
    <Modal>
    <TodoForm/>
    </Modal>
  )}

  {/* Este es eñ boton que va abrir el modal para que los usuarios creen sus todo */}
  <CreateTodoButton
    setOpenModal = {setOpenModal}

  />

</React.Fragment>

    )
}

export{ AppUI }