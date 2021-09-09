import { Observable, of } from 'rxjs';
import { Forecast } from 'src/app/shared/models/forecast.model';
import { WeatherState, WeatherStore } from '../weather.store';

export class WeatherQueryMock {
    readonly forecast$: Observable<Forecast[] | undefined>;
    readonly selectedCity$: Observable<Forecast | undefined>;

    constructor() {
        this.forecast$ = of([]);
        this.selectedCity$ = of(undefined);
    }

    getValue(): WeatherState {
        return {
            forecast: [],
            selectedCity: undefined,
        };
    }
}
