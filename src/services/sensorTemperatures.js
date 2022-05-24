export const getSensorTemperatures = async (startDate, endDate, temperature) => {
    console.log(' starrDate ', startDate, " end date --> ", endDate, 'temperature -->', temperature);
    const url = `http://localhost:8080/temperaturescalculate?from=${startDate}&to=${endDate}&temperature=${temperature}`;
    console.log(' url ', url);
    const response = await fetch(url);
    const pruebita = await response.json();
    console.log('Contenidooo --> ', pruebita);
    return pruebita;
}