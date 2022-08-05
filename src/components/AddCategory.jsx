import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {//setcategoria se desestructura la prop

    const [inputValue, setInputValue] = useState('')
    const onInputChange = ({ target}) => {
        setInputValue(target.value);//permite modifitcar el input sin que quede un valor fijo
    }

    const onSubmit = (event) => { 
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;//si el valor del input esta es menos a 1 caracter sale de la funcion con el return

        // setcategoria(categories => [inputValue, ...categories]);//se llama setcategoria como funcion con el callback categoria para luego agregar el valor al arreglo
        onNewCategory(inputValue.trim());
        setInputValue('');
        
    }
        
    
    return (
        <form onSubmit={onSubmit}>        
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={ onInputChange}
                />
        </form>
  )
}
