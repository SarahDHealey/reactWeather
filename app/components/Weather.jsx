var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');



var Weather = React.createClass({
  getInitialState: function() {
    return{
      location: 'Miami',
      temp: 88
    }
  },
  handleSearch: function(location){
    this.setState({
      location: location,
      temp: 23
    });
  },
  //pull both variables off of the state
  //now you can pass these both down to WeatherMessage via props
  //a temp prop and a location prop
  render: function() {
    var {temp, location} = this.state;
    return(
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage temp={temp} location={location}/>
      </div>

    );
  }
});

module.exports = Weather;
