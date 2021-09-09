import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnvironmentConfig } from '../../../shared/data-acess/data.service';
import { CityService } from '../../../services/city.service';
import { CityServiceMock } from '../../../services/mocks/city.service.mock';
import { WeatherQueryMock } from '../../state/mocks/weather.query.mock';
import { WeatherServiceMock } from '../../state/mocks/weather.service.mock';
import { WeatherQuery } from '../../state/weather.query';
import { WeatherService } from '../../state/weather.service';

import { CityCardComponent } from './city-card.component';
import { DataModule } from '../../../shared/data-acess/data.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Forecast } from '../../../shared/models/forecast.model';

const dataConfig: EnvironmentConfig = {
    environment: {
        production: false,
        weatherApiKey: 'key',
        forecastApiUrl: 'https://test',
        pexelsApiKey: 'key',
        pixabayApiKey: 'key',
        pixabayApiUrl: 'key',
    },
};

describe('CityCardComponent', () => {
    let component: CityCardComponent;
    let fixture: ComponentFixture<CityCardComponent>;
    let weatherQuery: WeatherQuery;
    let weatherService: WeatherService;
    let cityService: CityService;

    const mockForecast: Forecast = {
        cod: '200',
        message: 0,
        cnt: 40,
        list: [
            {
                dt: 1631167200,
                main: {
                    temp: 18.34,
                    feels_like: 18.16,
                    temp_min: 18.34,
                    temp_max: 19.94,
                    pressure: 1017,
                    sea_level: 1017,
                    grnd_level: 939,
                    humidity: 74,
                    temp_kf: -1.6,
                },
                weather: [{ id: 801, main: 'Clouds', description: 'few clouds', icon: '02d' }],
                clouds: { all: 20 },
                wind: { speed: 1.22, deg: 227, gust: 1.9 },
                visibility: 10000,
                pop: 0,
                sys: { pod: 'd' },
                dt_txt: '2021-09-09 06:00:00',
                date: new Date('2021-09-09T06:00:00.000Z'),
            },
        ],
        city: {
            id: 3117735,
            name: 'Madrid',
            coord: { lat: 40.4165, lon: -3.7026 },
            country: 'ES',
            population: 1000000,
            timezone: 7200,
            sunrise: 1631166600,
            sunset: 1631212476,
        },
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CityCardComponent],
            imports: [HttpClientTestingModule, DataModule.forRoot(dataConfig)],
            providers: [
                {
                    provide: WeatherQuery,
                    useClass: WeatherQueryMock,
                },
                {
                    provide: CityService,
                    useClass: CityServiceMock,
                },
            ],
        }).compileComponents();

        weatherQuery = TestBed.inject(WeatherQuery);
        weatherService = TestBed.inject(WeatherService);
        cityService = TestBed.inject(CityService);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CityCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should findImage function not set an image when city is undefined', () => {
        const spyGetCityImage = jest.spyOn(cityService, 'getCityImage');

        expect(spyGetCityImage).not.toHaveBeenCalled();
    });

    it('should findImage function set an image', async () => {
        const mockImage = {
            total: 1,
            totalHits: 1,
            hits: [
                {
                    webformatURL: 'https://pixabay.com/get/123.jpg',
                },
            ],
        };
        const spyGetCityImage = jest.spyOn(cityService, 'getCityImage').mockReturnValue(of(mockImage));

        component.city = mockForecast;
        component.ngOnInit();

        expect(spyGetCityImage).not.toHaveBeenCalledWith('city');

        expect(component.bgImage).toEqual(mockImage.hits[0].webformatURL);
    });

    it('should openCity set selected city', () => {
        const spyWeatherService = jest.spyOn(weatherService, 'setSelectedCity');

        component.openCity(mockForecast);

        expect(spyWeatherService).toHaveBeenCalledWith(mockForecast);
    });
});
