import React, {useState} from 'react';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css'

const Forecast = () => {
    // destructuring!
   let [responseObj, setResponseObj] = useState({});
   let [city, setCity] = useState('');
   let [unit, setUnit] = useState('imperial');
   let [error, setError] = useState(false);
   let [loading, setLoading] = useState(false);


   function getForecast(e) {
    e.preventDefault();
    if (city.length === 0) {
        return setError(true);
    }
    setError(false);
    setResponseObj({});
    setLoading(true);
    const uriEncodedCity = encodeURIComponent(city);

    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "e3d4d0f9d3mshe4945d23ee91dd6p177e19jsn3d669d76305f"
        }
    })

    .then(response => response.json())
    .then(response => {
        setResponseObj(response)
        if (response.cod !== 200) {
            throw new Error()
        }
        setResponseObj(response);
        setLoading(false);
   })
   .catch(err => {
       setError(true);
       setLoading(false);
       console.log(err.message);
   });
}
   return (
        <div>
           <h2>Find Current Weather Conditions</h2>
           <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    className={classes.textInput}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celcius
                </label>
                <button className={classes.Button} type="submit">Get Forecast</button>
            </form>
           <Conditions
               responseObj={responseObj}
               error={error}
               loading={loading}
               />
       </div>
   )
}
export default Forecast;