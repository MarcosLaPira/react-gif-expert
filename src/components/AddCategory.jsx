import { useState } from "react"

export const AddCategory = ({nuevaCategoria}) => {

  const [inputValue, setInputValue] = useState('one punch');

  const onInputChange = (event) => {   
    setInputValue(event.target.value);
  }
  
  const onSubmit = (event) => {
    
    event.preventDefault();
    
    if(inputValue.trim().length <= 1)return;

    nuevaCategoria(inputValue.trim());  // Aquí corregí la referencia a inputValue
    setInputValue('');  // Limpiar el campo de entrada después de agregar
  }

  return (

    <form onSubmit={ onSubmit}>

        <input 

            type="text"
            placeholder="Buscar Gifts"
            value={inputValue}
            onChange={onInputChange}

        />

    </form>
   
  )

}

