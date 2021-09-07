import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap, map, retry, repeat } from 'rxjs/operators';
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

    getPexelsImage(name: string): Observable<any> {
        return this.http
            .get(`https://api.pexels.com/v1/search?query=${name}&per_page=1&page=1&orientation=landscape`, {
                headers: {
                    Authorization: `${environment.pexelsApiKey}`,
                },
            })
            .pipe(
                map((res: any) => {
                    if (res.photos.length === 0) {
                        return;
                    }

                    return res.photos[0].src.large;
                }),
            );
    }
}
