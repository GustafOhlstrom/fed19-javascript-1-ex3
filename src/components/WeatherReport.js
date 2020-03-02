import React from 'react';
import WeatherConditions from './WeatherConditions'

const WeatherReport = ({report}) => {
	const { city, temp, humidity, weatherConditions } = report
	return (
		<div id="WeatherReport">
			<div className="card bg-dark text-white">
				<div className="card-body text-center">
					<h5 className="card-title mb-4">The temperature in {city} is {temp}&deg; C right now, with a humidity of {humidity}%.</h5>
					<h6 className="card-title mb-1">Current weather is:</h6>
					<WeatherConditions weatherConditions={weatherConditions} />
				</div>
			</div>	
		</div>
	)
}

export default WeatherReport;
