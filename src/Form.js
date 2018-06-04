import React, { Component } from 'react';
import './App.css';
class Form extends Component {
  render() {
    return (
     <form className="Form" onSubmit={this.props.getWeather}>
       <input type="text" placeholder="City" name="city" className="FormInput"/>
       <input type="text" placeholder="Country" name="country"className="FormInput"/>
       <button className = "FormBtn"> Get weather </button>
       <p>*Please enter Full name of city & country</p>
       </form>
    );
  }
}

export default Form;
