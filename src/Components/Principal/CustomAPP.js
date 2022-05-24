

import { React, useState } from 'react';
import { getSensorTemperatures } from '../../services/sensorTemperatures';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './principal.css';

export const CustomAPP = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [temperature, setTemperature] = useState(0);

  
    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(formValues);
        console.log('startDate ', startDate.toISOString(), 'endDate ', endDate.toISOString(), 'temperature ', temperature);
        const startDateIso = startDate.toISOString();
        const endDateIso = endDate.toISOString();
        const temperatures = await getSensorTemperatures(startDateIso, endDateIso, temperature);
        console.log("Hola mundo");
        //console.log(temperatures);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Calculador de temperaturas</h1>
            <hr />
            <div className='form-group mt-2'>
                <label htmlFor='startDate'>Fecha de Inicio</label>
                <DatePicker
                    selected={startDate}
                    selectsStart
                    showTimeInput
                    dateFormat='dd/MM/yyyy HH:mm:ss'
                    startDate={startDate}
                    endDate={endDate}
                    onChange={date => setStartDate(date)}
                />
            </div>
            <div className='form-group mt-2'>
                <label htmlFor='endDate'>Fecha de Fin</label>
                <DatePicker
                    selected={endDate}
                    selectsEnd
                    showTimeInput
                    dateFormat='dd/MM/yyyy HH:mm:ss'
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    onChange={date => setEndDate(date)}
                />
            </div>
            <div className='form-group mt-2'>
                <label htmlFor='temperature'>Temperatura</label>
                <input
                    type='number'
                    name='temperature'
                    className='form-control'
                    placeholder='Temperatura'
                    autoComplete='off'
                    required
                    value={temperature}
                    onChange={e => setTemperature(e.target.value)}
                //onChange={handleImputChange}
                />
            </div>
            <button type='submit' className='btn btn-primary mt-5'>
                Guardar
            </button>
        </form>

    )

}













