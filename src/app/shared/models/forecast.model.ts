import { City } from './city.model';
import { List } from './list.model';

export interface Forecast {
    cod: string;
    message: number;
    cnt: number;
    list: List[];
    city: City;
}
