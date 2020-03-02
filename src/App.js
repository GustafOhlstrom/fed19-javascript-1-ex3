import React from 'react';
import axios from 'axios'
import SearchCity from './components/SearchCity';
import WeatherReport from './components/WeatherReport';

class App extends React.Component {
	state = {
		errorMessage: false,
		report: null,
		weatherSearch: ''
	}

	handleChange = e => this.setState({weatherSearch: e.target.value})

	handleSubmit = e => {
		e.preventDefault()
		const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.weatherSearch + '&units=metric&appid=de31ff77933ab85811cc67d10e96d357'
		
		axios.get(url)
			.then(resp => {
				const ref = resp.data
				this.setState({
					report: {
						city: ref.name,
						temp: ref.main.temp,
						humidity: ref.main.humidity,
						weatherConditions: ref.weather
					},
					weatherSearch: "",
				})
			})
			.catch(err => this.setState({errorMessage: "Could not get weather for city: " + err}))
	}

	render() {
		const { report, errorMessage, weatherSearch } = this.state
		return (
			<div id="app">
				<div className="container my-5">
					<h1 className="text-center mb-5">
						<span role="img" aria-label="Weather?">🌦❔</span>
					</h1>

					<SearchCity 
						weatherSearch={weatherSearch}
						onChange={this.handleChange}
						onSubmit={this.handleSubmit}
					/>

					{
						report
						? (
							<WeatherReport 
								report={report}
							/>
						)
						: errorMessage && (
							<div className="alert alert-danger text-center" role="alert">
								{errorMessage}
							</div>
						)
					}
				</div>
			</div>
		)
	}
}

export default App;
