# CityCardComponent

This component is responsible for three things: Show the current forecast for the city, find an image to show in the card background and set a selected city when the user clicks in the card.

When a click is performed, it calls openCity function, which calls `WeatherService.setSelectedCity` passing the city object as a parameter.
This service will update the State and the `HourlyComponent` will react to this event showing the selected city hourly forecast.

 