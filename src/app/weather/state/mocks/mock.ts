import { Forecast } from 'src/app/shared/models/forecast.model';

export const mockForecast: Forecast = {
    cod: '200',
    message: 0,
    cnt: 40,
    list: [
        {
            dt: 1631156400,
            main: {
                temp: 19.8,
                feels_like: 19.56,
                temp_min: 19.8,
                temp_max: 20.68,
                pressure: 1002,
                sea_level: 1002,
                grnd_level: 939,
                humidity: 66,
                temp_kf: -0.88,
            },
            weather: [
                {
                    id: 800,
                    main: 'Clear',
                    description: 'clear sky',
                    icon: '01n',
                },
            ],
            clouds: {
                all: 0,
            },
            wind: {
                speed: 0.45,
                deg: 2,
                gust: 2.78,
            },
            visibility: 10000,
            pop: 0,
            sys: {
                pod: 'n',
            },
            dt_txt: '2021-09-09 03:00:00',
            date: new Date('2021-09-09T03:00:00.000Z'),
        },
    ],
    city: {
        id: 3117735,
        name: 'Madrid',
        coord: {
            lat: 40.4165,
            lon: -3.7026,
        },
        country: 'ES',
        population: 1000000,
        timezone: 7200,
        sunrise: 1631166600,
        sunset: 1631212476,
    },
};
