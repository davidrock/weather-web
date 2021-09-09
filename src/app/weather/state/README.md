# Weather State Management

As explained in the main README file, each file has a very defined objective and play a unique role in the state management with Akita.

## WeatherStore
The WeatherStore has two methods: `addUniqueWeather` and `setSelectedCity`

 - `addUniqueWeather` - We don't want to have more than one Forecast object for each city in the State, so will we filter the current array of forecasts excluding any existing forecast for with the same `city.id` , fill a custom `date` property with actually a Date value (so we a human can read this in the HourlyComponent), after that, we add the new forecast in the array in call the update method with the new version of the list.

 - `setSelectedCity` - Receives a city object as a parameter, check if it is not undefined and call update method from the Store passing the city as the new `selectedCity` value.

## WeatherService

We need to call this service when we want to change our state. 
This service has `getWeather` and `setSelectedCity` functions. 

 - `setSelectedCity` -> Simply call the WeatherStore method responsible for update the selectedCity in the state
 - `getWeather` -> The heart of our application. It sends a GET request to the OpenWeather API passing some params like the name of the city, when it receives the answer it asks WeatherStore to add the Forecast in the State.

## WeatherQuery

The place where we add our observables and it is responsible for the communication with the components. We are always subscribing to these observables.
