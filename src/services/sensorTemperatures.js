export const getSensorTemperatures = async (startDate, endDate, temperature) => {
    const url = `http://localhost:9052/temperatures-calculate?from=${startDate}&to=${endDate}&temperature=${temperature}`;
    const responseApi = await fetch(url);
    const responseJson = await responseApi.json();
    return responseJson;
}