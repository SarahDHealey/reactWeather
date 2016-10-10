var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');


var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        errorstate: false,
        isLoading: false,
        location: location,
        temp: temp
      });
    },
    function(errmessage){
      that.setState({
        isLoading: false,
        errorstate: true,
        errorMessage: errmessage.message
      });
    });
  },
  render: function(){
    var {isLoading, temp, location, errorstate, errorMessage} = this.state;

    function renderMessage(){
      if (isLoading) {
        return <h3 className="text-center">fetching weather...</h3>;
      } else if (errorstate){
        return <h3> Could not find your city!</h3>;
      }
       else if ( temp && location){
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    function renderError () {
      console.log('you have hit the renderError function');
      if(typeof errorMessage === 'string') {
        return (
          <ErrorModal/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
