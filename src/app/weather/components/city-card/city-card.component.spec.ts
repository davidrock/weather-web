import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnvironmentConfig } from '../../../shared/data-acess/data.service';
import { CityService } from '../../../services/city.service';
import { CityServiceMock } from '../../../services/mocks/city.service.mock';
import { WeatherQueryMock } from '../../state/mocks/weather.query.mock';
import { WeatherQuery } from '../../state/weather.query';
import { WeatherService } from '../../state/weather.service';

import { CityCardComponent } from './city-card.component';
import { DataModule } from '../../../shared/data-acess/data.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { mockForecast } from '../../state/mocks/mock';

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
    let weatherService: WeatherService;
    let cityService: CityService;

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
