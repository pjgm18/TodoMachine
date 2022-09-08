import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css'

/* const estilos = {
    color:'red',
    backgroundColor: 'yellow',
} */
function TodoCounter(){
    const {totalTodos, completedTodos} = React.useContext(TodoContext)
    
    return(
        /* Para enviar un atribuito que no se un texto a nuestras propiedades lo hacemos con llaves, las llaves sirven para escrbir codigo JS.*/
        <h2 className='TodoCounter' /* style={ estilos} */>Has completado {completedTodos} de {totalTodos} TODOs</h2>
    )
}

export  { TodoCounter }