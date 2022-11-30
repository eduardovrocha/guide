import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class AssetCommodityService {
    readonly apiURL: string;

    constructor(private http: HttpClient) {
        this.apiURL = 'http://localhost:3009/asset_commodities/?cod=PETR4.SA';
    }

    getAssetCommodityLastUpdate(): Observable<any> {
        return this.http.get(this.apiURL);
    }

    // @ts-ignore
    getAssetCommodity(): Observable<any> {
        return this.http.get(this.apiURL);
    }
}
