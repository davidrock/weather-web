import { TestBed } from '@angular/core/testing';
import { WeatherStore } from './weather.store';
import { mockForecast } from './mocks/mock';

describe('WeatherStore', () => {
    let store: WeatherStore;

    beforeEach(() => {
        store = TestBed.get(WeatherStore);
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
});
