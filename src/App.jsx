import { useEffect, useState } from 'react'
import './App.css'
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'

function App() {

  const [search, setSearch] = useState('')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    if (search !== '') {
      fetch(` https://api.weatherapi.com/v1/forecast.json?key=ab163f19efc14ae0aad190335222601&q=${search}&aqi=no&days=3 `)
        .then(resp => resp.json())
        .then(weather => setWeather(weather))
    }
  }, [search])


  return (
    <div className="App">
      <input className='search' type='search' onChange={(event) => setSearch(event.target.value)} />
      <div>
        {
          search && weather ? (
            <article className='weather-section'>
              <CurrentWeather weather={weather} />
              <Forecast weather={weather} />
            </article>)


            : null}
      </div>
    </div>
  )

}

export default App
