import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'

function TodoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext)
    /* Esta funcion va a llamar a setSearchValue  para actualzar el estado */
    const onSearchValueChange = (event) => {
       console.log(event.target.value) 
       setSearchValue(event.target.value)
    }
    return (<input        
            className='TodoSearch' 
            placeholder="Cebolla"
            /* La propiedad value conecta el elemento (imput) con el estado, es decir el valor del el elemento imput debe ser igual al estado */
            value = {searchValue}
            /* El metodo onChange ejecuta una funcion */
            onChange={onSearchValueChange}
            
        />
       
    )
        
       
       
    
    
}

export { TodoSearch}