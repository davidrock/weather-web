import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Forecast } from 'src/app/shared';

export interface WeatherState {
    forecast?: Forecast;
}

export function createInitialState(): WeatherState {
    return {
        forecast: undefined,
    };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'weather' })
export class WeatherStore extends Store<WeatherState> {
    constructor() {
        super(createInitialState());
    }

    updateWeather(forecast: Forecast): void {
        console.info('WeatherStore.updateWeather()');
        this.update({ forecast });
    }
}
