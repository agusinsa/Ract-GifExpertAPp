import {  useEffect, useState } from "react";//useEffect sirve para disparar efectos secundarios, se ejecuta cuando termina de pasar algo
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);
   

  return (
      <>
      <h3>{category}</h3>
     
      {
        isLoading &&(<h2>Cargando...</h2>)          
      }

      <div className="card-grid">{/*className es lo mismo que class de CSS pero para JSX o JS*/}
        {
          images.map((image) => (
            <GifItem
              // enviamos props al archivos GifItem.jsx
              key={image.id}
              {... image}//con el operador spread (...) exparcimos las propiedades asi las enviamos a todas 
            />
        )) }

      </div>

      </>
  )
}
