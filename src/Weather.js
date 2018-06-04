import React, { Component } from 'react';
import './App.css';


class Weather extends Component {

  render() {
     const weather = parseFloat(this.props.temperature - 271.15).toFixed(2);
     var date = new Date(this.props.sunrise*1000);
     // Hours part from the timestamp
     var hours = date.getHours();
     // Minutes part from the timestamp
     var minutes = "0" + date.getMinutes();
     // Seconds part from the timestamp
     var seconds = "0" + date.getSeconds();

     // Will display time in 10:30:23 format
     var sunrise = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
     var dates = new Date(this.props.sunset*1000);
     // Hours part from the timestamp
     var hourss = dates.getHours();
     // Minutes part from the timestamp
     var minutess = "0" + dates.getMinutes();
     // Seconds part from the timestamp
     var secondss = "0" + dates.getSeconds();

     // Will display time in 10:30:23 format
     var sunset = hourss + ':' + minutess.substr(-2) + ':' + secondss.substr(-2);
    return (
      <div className="data">
        {this.props.city && this.props.country &&
        <div className="card"><h4>Your Location is :</h4><h4>
        {this.props.city}, {this.props.country}</h4></div>}
        {this.props.temperature && <div className="card"><h4>The Temperature right now is:</h4><h4>{weather}
        &#x2103;</h4></div>}
        {this.props.wind && <div className="card"><h4>Wind Speed is:</h4><h4>  {this.props.wind } kmph</h4></div>}
        {this.props.humidity && <div className="card"><h4>Humidity:</h4><h4>  {this.props.humidity}</h4></div>}
        {this.props.description &&<div className="card"><h4>Overall weather:</h4><h4>{this.props.description}</h4></div>}
        {this.props.sunrise &&<div className="card"><h4>Sunrise will take place at:</h4><h4>{sunrise} am</h4></div>}
        {this.props.sunset &&<div className="card"><h4>Sunset will take place at:</h4><h4> {sunset} pm</h4></div>}
         {this.props.lat &&<div className="card"><h4>latitude :</h4><h4> {this.props.lat}</h4></div>}
          {this.props.lon &&<div className="card"><h4>longitude:</h4><h4> {this.props.lon}</h4></div>}
      </div>
    );
  }
}

export default Weather;
