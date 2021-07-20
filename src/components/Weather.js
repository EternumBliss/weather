import React from 'react';

const Weather = ({weather}) => {
    const getTime = (times) => {
        let time = new Date(times);
        let hours = time.getHours();
        let minutes = time.getMinutes();
        if (minutes < 10) {
            minutes = `0${minutes}`
        }
        if (hours < 10) {
            hours = `0${hours}`
        }
        return `${hours}:${minutes}`
    };
    return (
        <div className='weather__infoBlock'>
            <p className='weather__time'>{getTime(weather.dt * 1000)}</p>
            <p className='weather__city'>{weather.name}</p>
            <div>
                <div className='weather__infoBlock__top'>
                    <p className='weather__type'>{weather.weather.map(el => {
                        return el.description
                    })}</p>
                    <p className='weather__speed'>{getTime(weather.wind.speed)} м/с</p>
                </div>
                <div className='weather__temp'><p
                    className='weather__deg'>{Math.round(weather.main.temp - 273.15)}°C</p>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='weather'/>
                </div>
            </div>
            <p className='weather__sunrise'>Рассвет: {getTime(weather.sys.sunrise * 1000)}</p>
            <p className='weather__sunset'>Закат: {getTime(weather.sys.sunset * 1000)}</p>
        </div>
    );
};

export default Weather;