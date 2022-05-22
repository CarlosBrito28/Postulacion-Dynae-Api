

import React from 'react';
import { useFetch } from '../../hooks/useFetch';

import './principal.css';

export const CustomAPP = () => {
const [formValues, handleImputChange] = useFetch({
    fecha:'',
    temperatura:''
});
const{ fecha, temperatura} = formValues;


const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(formValues);
} 

  return (
    <form onSubmit={handleSubmit}>
        <h1>Calculador de temperaturas</h1>
        <hr/>
        <div className="form-group">
            <input
            type="date"
            name="fecha"
            className="form-control"
            autoComplete="off"
            required
            value = { fecha }
            onChange= {handleImputChange}
             />
        </div>


        <div className="form-group ">
            <input
            type="text"
            name="temperatura"
            className="form-control mt-5"
            placeholder= "Temperatura"
            autoComplete="off"
            required
            value = { temperatura }
            onChange= {handleImputChange}
             />
        </div> 
        <button type="submit"  className="btn btn-primary mt-5">
            Guardar
        </button>
    </form>

  )

}













