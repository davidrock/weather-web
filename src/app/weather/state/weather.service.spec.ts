import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DataModule } from '../../shared/data-acess/data.module';
import { EnvironmentConfig } from '../../shared/data-acess/data.service';
import { mockForecast } from './mocks/mock';
import { WeatherStoreMock } from './mocks/weather.store.mock';
import { WeatherService } from './weather.service';
import { WeatherStore } from './weather.store';

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

describe('WeatherService', () => {
    let weatherService: WeatherService;
    let weatherStore: WeatherStore;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, DataModule.forRoot(dataConfig)],
            providers: [
                {
                    provide: WeatherStore,
                    useClass: WeatherStoreMock,
                },
                WeatherService,
            ],
        });

        weatherService = TestBed.inject(WeatherService);
        weatherStore = TestBed.inject(WeatherStore);
        httpMock = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(weatherService).toBeTruthy();
    });

    it('should getWeather call addUniqueWeather if success', () => {
        const expectedUrl = `${dataConfig.environment.forecastApiUrl}?q=city&appid=${dataConfig.environment.weatherApiKey}&units=metric`;
        const spyAddUniqueWeather = jest.spyOn(weatherStore, 'addUniqueWeather');

        weatherService.getWeather('city');

        const request = httpMock.expectOne(expectedUrl);
        request.flush({});

        expect(request.request.method).toBe('GET');
        expect(spyAddUniqueWeather).toHaveBeenCalled();
    });

    it('should setSelectedCity call store to set selected city', () => {
        const spyStoreSetSelectedCity = jest.spyOn(weatherStore, 'setSelectedCity');

        weatherService.setSelectedCity(mockForecast);

        expect(spyStoreSetSelectedCity).toHaveBeenCalledWith(mockForecast);
    });
});
