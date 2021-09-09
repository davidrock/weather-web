import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DataModule } from '../../shared/data-acess/data.module';
import { EnvironmentConfig, DataService } from '../../shared/data-acess/data.service';
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
    let httpMock: HttpTestingController;
    let weatherStore: WeatherStore;
    let data: DataService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, DataModule.forRoot(dataConfig)],
            providers: [
                {
                    provide: WeatherStore,
                    useClass: WeatherStoreMock,
                },
            ],
        });

        weatherService = TestBed.inject(WeatherService);
        httpMock = TestBed.inject(HttpTestingController);
        weatherStore = TestBed.inject(WeatherStore);
        data = TestBed.inject(DataService);
    });

    it('should be created', () => {
        expect(weatherService).toBeTruthy();
    });
});
