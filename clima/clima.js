const axios = require('axios');

const getClima = async(lat, lng)=>{

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f1fd48fe0bf6e926c6f66dbf740a7adb`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}