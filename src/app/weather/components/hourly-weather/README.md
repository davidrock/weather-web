# HourlyComponent

The objective of this component is to show the forecast for the next 12 hours.

As we did in ForeacastComponent, we will have a `selectedCity$` observable, which will be defined in the constructor, getting the `selectedCity$` property from our WeatherQuery, and we also add takeUntil pipe, so we don't get memory leak problems.

When we click on a city card, it will update the State to have a selectedCity filled in the state. As HourlyComponent is subscribing to this observable, it will receive the new value and will react to it, showing the new forecast for the next hours for the selected city.


 