import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CommunityService {
    constructor(private httpClient: HttpClient) { }

    getCommunities(): Observable<any> {
        return this.httpClient.get('/assets/mocks/datas/community.mock.json');
    }

}
