import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { Forecast } from 'src/app/shared';
import { WeatherStore, WeatherState } from './weather.store';

@Injectable({ providedIn: 'root' })
export class WeatherQuery extends Query<WeatherState> {
    readonly forecast$: Observable<Forecast[] | undefined>;
    readonly selectedCity$: Observable<Forecast | undefined>;

    constructor(protected store: WeatherStore) {
        super(store);

        this.forecast$ = this.select(state => state.forecast);
        this.selectedCity$ = this.select(state => state.selectedCity);
    }
}
