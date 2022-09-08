import React from 'react';
import './TodoList.css';

function TodoList(props) {
    return(
        <section>
            <ul>
                {/* La propiedad children recibe lo que se escriba en el contenido dentro de  las etiquetas de cierre y apertura de nuestro componente*/}
                { props.children}
            </ul>
        </section>
    )
}

export { TodoList }