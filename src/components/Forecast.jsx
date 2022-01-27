import Daily from "./Daily"

function Forecast({ weather }) {
    return (
        <div className='forecast'>
            {weather.forecast?.forecastday.map(day => (
                <Daily key={day.date} day={day} />
            ))

            }
        </div>
    )
}
export default Forecast