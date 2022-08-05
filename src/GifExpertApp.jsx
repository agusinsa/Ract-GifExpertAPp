import { useState } from 'react';
import { AddCategory, GifGrid } from './components/';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

  const onAddCatgory = (newCategory) => {
      if (categories.includes(newCategory)) return;
      // categories.push(newCategory);
      setCategories([newCategory, ...categories]);//... Usar Srpead para "agregar" un elemento al arreglo (copia el arreglo anterior y le agrega el elemento que queramos)
       // categories.push('Counter Strike');
       // setCategories(cat => [...cat, 'Counter Strike']);// otra opcion llamar a un callback "cat" y hacer lo mismo 
    }

  return (
      <>
          {/* titulo */}
          <h1>GifExpertApp</h1>
          
          {/* input */}
            <AddCategory 
                onNewCategory={(value)=>onAddCatgory(value)}
            />
          {/* listado de Gif */}

            {categories.map((category) => 
                (
              <GifGrid
                key={category}
                category={category}
              />
            ))
            }


    </>
  )
}

