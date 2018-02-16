import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { FlashMessagesService } from 'ngx-flash-messages';
import { HttpInterceptorService } from "./httpinterceptor.service";

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpInterceptorService,   private flashMessagesService: FlashMessagesService) { }

    login(model:any) {
        return this.http.post('http://127.0.0.1:8000/mylogin', model)
            .map((response: Response) => response.json());
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
