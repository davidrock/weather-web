import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { WeatherStore, WeatherState } from './weather.store';

@Injectable({ providedIn: 'root' })
export class WeatherQuery extends Query<WeatherState> {
    constructor(protected store: WeatherStore) {
        super(store);
    }
}
