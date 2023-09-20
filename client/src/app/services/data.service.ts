import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private metaUrl = 'assets/data-json/work-data.json';

    constructor(private http: HttpClient) {}

    getMetaData(): Observable<any>{
        return this.http.get<any>(`${this.metaUrl}`);
    }

}