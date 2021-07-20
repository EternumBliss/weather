import React from 'react';
import axios from "axios";

const Form = ({setWeather, city, setCity}) => {
    const getWeather = (e) => {
        e.preventDefault();
        let API_KEY = '3cb1275048c49ba1b3d9bbbcaa0884f6';
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then(({data})=> setWeather(data))
            .catch(()=> alert('Введите город корректно'));
    };
    const inputHandler = (e) =>{

        setCity(e.target.value)
    };
    return (
        <form className='weather__form' action='' onSubmit={getWeather}>
      <input className='weather__form__input' type='text' onChange={inputHandler} placeholder='Введите город'/>
      <button className='weather__form__button' type='submit'>Узнать</button>
        </form>
    );
};

export default Form;