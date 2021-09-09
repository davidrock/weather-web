import { Store } from '@datorama/akita';
import { Forecast } from '../../../shared/models/forecast.model';
import { WeatherState } from '../weather.store';
import { mockForecast } from './mock';

export class WeatherStoreMock {
    addUniqueWeather(data: Forecast): void {}

    setSelectedCity(data: Forecast): void {}

    getValue(): WeatherState {
        return { forecast: [mockForecast] };
    }
}
