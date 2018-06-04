import React, { Component } from 'react';
import './App.css';
import './index.css'
import Form from "./Form";
import Weather from "./Weather";
import Title from "./Title";

class App extends Component {
  state={
    temperature: '',
    city: '',
    country: '',
    sunrise: '',
    sunset:'',
    wind:'',
    humidity: '',
    description: '',
    error: '',
    lat: '',
    lon:''
  }
  getWeather= async (e)=> {
    e.preventDefault()
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=7307ad4e39e652a88e5e2183df4cd7ce`)

    const data = await api_call.json();
    if(city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        wind: data.wind.speed,
        lat: data.coord.lat,
        lon: data.coord.lon
      })
    } else {
      this.setState({
        temperature:'',
        city:'',
        country: '',
        humidity: '',
        description: '',
        sunrise:'',
        sunset:'',
        wind: '',
        lat: '',
        lon: '',
        error: "Please enter the values"
      })
    }
  }
  render() {
    return (
      <div t >
        <Title/>
        <Form getWeather={this.getWeather}/>
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          wind={this.state.wind}
          error={this.state.error}
          lat={this.state.lat}
          lon={this.state.lon}
        />
      </div>
    );
  }
}

export default App;
