

import './weather.css';
import {useState} from 'react';
function App() {
  const api = {
    key: "5527139157a2b9b20479bb14dce071ab",
    base: "https://api.openweathermap.org/data/2.5/"
  }
const [city, setCity] = useState("");
const [weather, setWeather] = useState("");
function handleChange(event){
  setCity(event.target.value)
}
function handleTemp(){
  fetch(`${api.base}weather?q=${city}&units=metric&appid=${api.key}`)
  .then(data => data=data.json())
  .then((info) =>{setWeather(info)})
    document.getElementById("p1").innerHTML = weather.main.temp;
  console.log(weather.main.temp);
}
  return (
    <div className="App">
      <div className='weather-app'>
      <input placeholder="Enter city..." value= {city} onChange={handleChange}></input>
      <button onClick={handleTemp}>SUBMIT</button>
      <h2 id="p1"></h2>
      </div>
    </div>
  )
}

export default App;
