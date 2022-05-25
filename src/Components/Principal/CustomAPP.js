import { React, useState } from 'react';
import { getSensorTemperatures } from '../../services/sensorTemperatures';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './principal.css';

export const CustomAPP = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [temperature, setTemperature] = useState(0);
    const [responseTemperature, setResponseTemperature] = useState({ majorTemperature: null, minorTemperature: null });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const startDateFormatting = convertDate(startDate);
        const endDateIsoFormatting = convertDate(endDate);

        setResponseTemperature(await getSensorTemperatures(startDateFormatting, endDateIsoFormatting, temperature));
    }

    const convertDate = (date) => new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();

    return (
        <>
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
                    />
                </div>
                <button type='submit' className='btn btn-primary mt-5'>
                    Guardar
                </button>
            </form>
            <div>
                {
                    responseTemperature.majorTemperature !== null ?
                        <>
                            <h1> Temperatura maxima = {responseTemperature.majorTemperature}</h1>
                            <h1> Temperatura minima = {responseTemperature.minorTemperature}</h1>
                        </>
                        :
                        <>
                            <h1> En este rango de fecha no existen temperaturas </h1>
                        </>
                }
            </div>
        </>
    )
}










