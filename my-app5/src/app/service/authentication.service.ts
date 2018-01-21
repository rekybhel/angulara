import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { FlashMessagesService } from 'ngx-flash-messages';


@Injectable()
export class AuthenticationService {
    constructor(private http: Http,   private flashMessagesService: FlashMessagesService) { }

    login(model:any) {
        return this.http.post('http://192.168.0.1:8183/anurag/users/login', model)
            .map((response: Response) => response.json())
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
