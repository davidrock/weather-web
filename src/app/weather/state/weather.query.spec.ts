import { TestBed } from '@angular/core/testing';
import { WeatherQuery } from './weather.query';
import { WeatherStore } from './weather.store';
import { mockForecast } from './mocks/mock';

describe('WeatherQuery', () => {
    let store: WeatherStore;
    let query: WeatherQuery;

    beforeEach(() => {
        store = TestBed.inject(WeatherStore);
        query = new WeatherQuery(store);
    });

    it('should create an instance', () => {
        expect(query).toBeTruthy();
    });

    it('should have forecast observable', () => {
        expect(query.forecast$).toBeTruthy();
    });

    it('should have forecast observable', () => {
        expect(query.selectedCity$).toBeTruthy();
    });

    it('should return mocked forecast$', (done: jest.DoneCallback) => {
        store.addUniqueWeather(mockForecast);

        query.forecast$.subscribe(forecast => {
            expect(forecast).toEqual([mockForecast]);
            done();
        });
    });
});
