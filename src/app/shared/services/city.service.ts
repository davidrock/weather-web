import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data-acess/data.service';
import { Pixabay } from '../models/pixabay.model';

@Injectable({
    providedIn: 'root',
})
export class CityService {
    constructor(private http: HttpClient, private data: DataService) {}

    getCityImage(name: string): Observable<Pixabay> {
        return this.http.get<Pixabay>(
            `${this.data.pixabayApiUrl}?key=${this.data.pixabayApiKey}&q=${name}&image_type=photo&orientation=horizontal&category=business`,
        );
    }
}
