import React from 'react'
import {useEffect,useState} from 'react';
import {getGifs} from '../helpers/Getgifs'


//un hook es una funcion
export const useFetchGifs = (category) => {

  const [imagenes,setImagenes] = useState([]);
  const [isLoading,setIsLoading] = useState(true);

  const getImagenes = async() =>{
    const nuevasImagenes = await  getGifs(category);
    setImagenes(nuevasImagenes);
    setIsLoading(false);
  }

  useEffect( () => {

    getImagenes()

  },[])//arreglo vacio seignifica qeu se dispara la primera vez qeu se contruye componente

  return {
    imagenes: imagenes,
    isLoading
  }
   
  
}


