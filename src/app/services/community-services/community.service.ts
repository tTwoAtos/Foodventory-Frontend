import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Community } from '@app/types/community';
import { Observable } from 'rxjs';
import { mockComs } from "@assets/mocks/datas/communities/community.mock"

@Injectable({
    providedIn: 'root',
})
export class CommunityService {
    constructor() { }

    getCommunities(): Promise<Community[]> {
        return new Promise((success) => {
            success(mockComs)
        })
    }

}
