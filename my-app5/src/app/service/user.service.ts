import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../models/index';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('http://192.168.0.1:8183/anurag/users/register', user, this.jwt()).map((response: Response) => response.json());
    }

    fgtpassword(user: User){

        return this.http.post('http://192.168.0.1:8183/anurag/users/frgtpassword', user, this.jwt()).map((response: Response) => response.json());
    } 
    resetpass(user: User){
	return this.http.post('http://192.168.0.1:8183/anurag/users/resetpassword', user, this.jwt()).map((response: Response) => response.json());
	    }
    changepass(user: User){
	return this.http.post('http://192.168.0.1:8183/anurag/users/tokenpass', user, this.jwt()).map((response: Response) => response.json());
	    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token ) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
