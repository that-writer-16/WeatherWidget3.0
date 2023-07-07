import React from 'react'

export const Today = ({today}) => {
  return (
	<div className='day'>
    <h2>Today</h2>
    <div>
      <img src={`http://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`}/><br/>
      {today.weather[0].main}
    </div>
    <div>
      {today.main.temp}&#8457;
    </div>
    <div>
      {today.main.temp_min}&#8457; / {today.main.temp_max}&#8457;
    </div>
  </div>
  )
}

export default Today