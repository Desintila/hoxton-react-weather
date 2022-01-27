function Daily({ day }) {
    return (
        <div className='day'>
            <p>{day.date}</p>
            <div className='condition'>
                <img src={day.day?.condition.icon} />
                <p>{day.day?.condition.text}</p>
            </div>
            <div className='temp'>
                <span>Max: {day.day?.maxtemp_c}°</span>
                <span>Min: {day.day?.mintemp_c}°</span>
            </div>
        </div>
    )
}
export default Daily