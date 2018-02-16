import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Property } from '../models/index';

@Injectable()
export class PropertyService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(property: Property) {
	 let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        return this.http.post('http://127.0.0.1:8000/an_addproperties_add', property, {
    headers: headers
}).map((response: Response) => response.json());
    }

    fgtpassword(property: Property){

        return this.http.post('http://192.168.0.1:8183/anurag/users/frgtpassword', property, this.jwt()).map((response: Response) => response.json());
    } 
    resetpass(property: Property){
	return this.http.post('http://192.168.0.1:8183/anurag/users/resetpassword', property, this.jwt()).map((response: Response) => response.json());
	    }
    changepass(property: Property){
	return this.http.post('http://192.168.0.1:8183/anurag/users/tokenpass', property, this.jwt()).map((response: Response) => response.json());
	    }

    update(id: number) {
        return this.http.put('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
         //create authorization header with jwt token
      // let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      // if (currentUser && currentUser.token ) {
         //   let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
		 let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
            return new RequestOptions();
     //  }
    }
}
