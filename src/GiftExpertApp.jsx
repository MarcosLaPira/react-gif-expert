import { useState } from "react"
import {AddCategory,GifGrid} from './components/'//por defecto va al index


export const GiftExpertApp = () => {

  const[categorias,setCategorias] = useState(['One Punch']) ;//lo inicializo como un arreglo

  
  const agregarCategoria = (nuevaCategoria) => {

    if(categorias.includes(nuevaCategoria)) return;
    
    
    setCategorias([nuevaCategoria,...categorias]);

  }
    


  return (
    <>
    
        <h1>GifExpertApp</h1>
    
        <AddCategory      
            nuevaCategoria = {value => agregarCategoria(value)}
        />

      
        {   
            categorias.map((category) => (
            
                <GifGrid 
                    key={category}
                    category={category}
                />
            ))
       
        }         
      
 
    </>
  ) 
}


