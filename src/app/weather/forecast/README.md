# ForecastComponent

The component has  `citiesForecast$` property declared, which will be defined in the constructor, where we set some pipes to only get 5 cities and configure it to stop listening after onDestroy, this way we avoid any memory leak.

Inside the OnInit hook, it will iterate over the cities list and call getWeather for each one.

I used the `take(5)` pipe because I am planning to have more cities in the Store, but only showing 5 at a time.


 