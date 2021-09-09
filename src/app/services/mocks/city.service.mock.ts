import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pixabay } from 'src/app/shared/models/pixabay.model';
import { environment } from 'src/environments/environment';

export class CityServiceMock {
    constructor() {}

    getCityImage(name: string): Observable<Pixabay> {
        return of({
            hits: [],
            totalHits: 0,
            total: 0,
        });
    }
}
