function CurrentWeather({ weather }) {
    return (
        <div className='weather'>
            <h1>Weather Today in {weather.location?.name}, {weather.location?.country} </h1>
            <p className='time'>{weather.location?.localtime}</p>
            <div className='weather-properties'>
                <div> <div className='today-condition'>
                    <img src={weather.current?.condition?.icon} />
                    <span>{weather.current?.temp_c}°</span>
                </div>
                    <p className='text'>{weather.current?.condition?.text}</p>
                </div>
                <div className='other'>
                    <span>Humidity: {weather.current?.humidity}%</span>
                    <span>Feels Like: {weather.current?.feelslike_c}°</span>
                    <span>Wind: {weather.current?.wind_kph} km/h</span>
                </div>
            </div>
        </div>
    )
}
export default CurrentWeather