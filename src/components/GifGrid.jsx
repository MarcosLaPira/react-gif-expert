import GifItem from './GifItem';
import {useFetchGifs} from '../hooks/useFetchGifs';


export const GifGrid = ({category}) => {

    //capto el resultado de el use efect qeu devulve imagenes y isloading
    const {imagenes,isLoading} = useFetchGifs(category);
/*
  
*/
  return (
    <>
        <h3>{category}</h3>       
        {
          isLoading?( <h2>Cargando..</h2>) : null //si is loading es true devolver el h2
        }
        <div className='card-grid'>
            {
                imagenes.map((imagen) => (
                  <GifItem 
                     key={imagen.id}
                     //title ={imagen.title}
                     //url = {imagen.url}
                     {...imagen}// le estoy pasando todas las propiedades
                  />
                ))
            }
           
        </div>
    </>

  )

}


