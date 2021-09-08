import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pixabay } from '../shared/models/pixabay.model';

@Injectable({
    providedIn: 'root',
})
export class CityService {
    constructor(private http: HttpClient) {}

    getCityImage(name: string): Observable<Pixabay> {
        return this.http.get<Pixabay>(
            `https://pixabay.com/api/?key=${environment.pixabayApiKey}&q=${name}&image_type=photo&orientation=horizontal&category=business`,
        );
    }
}
