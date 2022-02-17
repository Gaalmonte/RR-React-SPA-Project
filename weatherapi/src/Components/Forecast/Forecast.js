import React, {useState} from 'react';

const Forecast = () => {
    // destructuring!
    let [responseObj, setResponseObj] = useState({});

   function getForecast() {
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=seattle&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "e3d4d0f9d3mshe4945d23ee91dd6p177e19jsn3d669d76305f"
        }
    })
    .then(response => response.json())
       .then(response => {
           setResponseObj(response)
       })
    .catch(err => {
        console.error(err);
    });
   }
   return (
    <div>
    <h2>Find Current Weather Conditions</h2>
    <div>
        {JSON.stringify(responseObj)}
    </div>
    <button onClick={getForecast}>Get Forecast</button>
    </div>
   )
}
export default Forecast;