# WeatherForecaster

## Technologies used

 - Angular 12
 - Akita for State Management, built on top of RxJS
 - Jest for running tests
 - Tailwindcss 

## Architecture Overview

The project is organized in modules, thinking on the possibility of it to scale in the future. 
The modules are divide in: SharedModule, WeatherModule and SettingsModule. Each module has its routing configuration, so we have Lazy Load working here.

The first thing we need to understand is how we manage the data throughout the app. 
Since we are using Akita, we are not dealing directly with responses from a HttpClient request, Akita will do this job for us.
When using Akita we have a State, Service, Store and Query. 

 - State is how our data looks like, basically an interface.
 - Store is the only one responsible for dealing directly with the State and persists in it.
 - Service is the only one responsible for calling Store methods.
 - Query is where our components will subscribe to know when the State changes

The Service is responsible for making API calls or any business logic work and will call the Store methods to touch our State. As soon the Store calls update/set functions, any code that is listening
will receive the data through Observables.
Each HTTP response will call a function in our Store to set/update our Store, so when we get a response, we call a storage method to update the State and everything that is subscribing to it will receive the new state value.
We can follow these events, in developer mode, using Redux DevTools.

The advantage of using Akita is that we can persist data in localStorage/sessionStorage in the most organized possible, so we can save bandwidth or loading time with it.
Also, we reduce much of the complexity in updating child's components, we just need to update the State and the whole component tree that depends on this State will react to it as soon as our Query observables emit new values.

The weather module has the following components: 

 - ForecastComponent, 
 - CityCardComponent
 - HourlyWeatherComponent

ForecastComponent is the component responsible for loading the 5 cities we want to get the forecast. It will make an API call to OpenWeather to get the forecast for the next 5 days for that specific city.
With the OpenWeather response, we have a ngFor creating all the cards with the city info about Temperature and Wind Speed.

Our CityCardComponent, is responsible for actually fill itself. Each card will look for a photo from Pixabay related to the city and set it as the background image and, with the data returned from  OpenWeather, fill the temperature and wind speed.

The HourlyComponent is where we'll see the forecast for the next 12h, with an interval of 3h.
Inside of it, we are simply building a rectangle showing an image, the temperature and time.

The shared module is where we put general code that can be used anywhere in the app, like services and models. 

The current content of shared modules are:

 - CityService -> responsible for searching an image of a city for the cards
 - All the models/interfaces
 - DataAccess -> responsible for dealing with the environment variables 

The last module is the Settings module. Here is where we would have our page to configure the app, choose language, units of measurement or change cities. 

~~Unfortunatelly I didn't have enough time to finish this part.~~



 
## Running unit tests

  
Run `yarn test` to execute the unit tests via [Jest](https://jestjs.io/).
