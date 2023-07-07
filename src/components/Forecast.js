import React from 'react'

const Forecast = ({forecast}) => {
  let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	return (
	<div>
    {/* <h2>Forecast</h2>  */}
    <div id='forecast'>
          <div className='day'>
      <h4>{daysOfTheWeek[new Date(forecast[0].dt*1000).getDay()]}</h4>
      <div>
        <img src={`http://openweathermap.org/img/wn/${forecast[0].weather[0].icon}@2x.png`}/><br/>
        {forecast[0].weather[0].main}
      </div>
      <div>
        {forecast[0].main.temp}&#8457;
      </div>
      <div>
        {forecast[0].main.temp_min}&#8457; / {forecast[0].main.temp_max}&#8457;
      </div>
    </div>

    <div className='day'>
      <h4>{daysOfTheWeek[new Date(forecast[7].dt*1000).getDay()]}</h4>
      <div>
        <img src={`http://openweathermap.org/img/wn/${forecast[8].weather[0].icon}@2x.png`}/><br/>
        {forecast[8].weather[0].main}
      </div>
      <div>
        {forecast[8].main.temp}&#8457;
      </div>
      <div>
        {forecast[8].main.temp_min}&#8457; / {forecast[8].main.temp_max}&#8457;
      </div>
    </div>

    <div className='day'>
      <h4>{daysOfTheWeek[new Date(forecast[15].dt*1000).getDay()]}</h4>
      <div>
        <img src={`http://openweathermap.org/img/wn/${forecast[15].weather[0].icon}@2x.png`}/><br/>
        {forecast[15].weather[0].main}
      </div>
      <div>
        {forecast[15].main.temp}&#8457;
      </div>
      <div>
        {forecast[15].main.temp_min}&#8457; / {forecast[15].main.temp_max}&#8457;
      </div>
    </div>

    <div className='day'>
      <h4>{daysOfTheWeek[new Date(forecast[23].dt*1000).getDay()]}</h4>
      <div>
        <img src={`http://openweathermap.org/img/wn/${forecast[23].weather[0].icon}@2x.png`}/><br/>
        {forecast[23].weather[0].main}
      </div>
      <div>
        {forecast[23].main.temp}&#8457;
      </div>
      <div>
        {forecast[23].main.temp_min}&#8457; / {forecast[23].main.temp_max}&#8457;
      </div>
    </div>

    <div className='day'>
      <h4>{daysOfTheWeek[new Date(forecast[31].dt*1000).getDay()]}</h4>
      <div>
        <img src={`http://openweathermap.org/img/wn/${forecast[31].weather[0].icon}@2x.png`}/><br/>
        {forecast[31].weather[0].main}
      </div>
      <div>
        {forecast[31].main.temp}&#8457;
      </div>
      <div>
        {forecast[31].main.temp_min}&#8457; / {forecast[31].main.temp_max}&#8457;
      </div>
    </div>
    </div>

	</div>
	)
}

export default Forecast