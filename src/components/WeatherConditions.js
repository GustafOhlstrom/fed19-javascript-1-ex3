import React from 'react';

const WeatherCondition = ({weatherConditions}) => {
	return (
        <ul className="list-unstyled mb-0">
            {weatherConditions.map(condition => <li key={condition.id}>{condition.description}</li>)}
        </ul>	
	)
}

export default WeatherCondition;
