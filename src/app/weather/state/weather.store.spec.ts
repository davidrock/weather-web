import { TestBed } from '@angular/core/testing';
import { WeatherStore } from './weather.store';
import { mockForecast } from './mocks/mock';
import { WeatherStoreMock } from './mocks/weather.store.mock';

describe('WeatherStore', () => {
    let store: WeatherStore;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: WeatherStore, useClass: WeatherStoreMock }],
        }).compileComponents();

        store = TestBed.inject(WeatherStore);
    });

    it('should create an instance', () => {
        expect(store).toBeTruthy();
    });

    it('should have setSelectedCity function', () => {
        const spySetSelectedCity = jest.spyOn(store, 'setSelectedCity');

        store.setSelectedCity(mockForecast);

        expect(spySetSelectedCity).toHaveBeenCalledWith(mockForecast);
    });

    it('should have setSelectedCity function', () => {
        const spyAddUniqueWeather = jest.spyOn(store, 'addUniqueWeather');

        store.addUniqueWeather(mockForecast);

        expect(spyAddUniqueWeather).toHaveBeenCalledWith(mockForecast);
    });

    it('should setSelected function return when city is undefined', () => {
        const spySetSelectedCity = jest.spyOn(store, 'setSelectedCity').mockReturnValue(undefined);

        store.setSelectedCity(undefined);

        expect(spySetSelectedCity).toHaveBeenCalledWith(undefined);
    });
});
