import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Http, Response} from '@angular/http';
import { HttpModule } from '@angular/http';
import { FlashMessagesService } from 'ngx-flash-messages';
import { AlertService, AuthenticationService } from './service/index';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
         private flashMessagesService: FlashMessagesService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model)
            .subscribe(
                data => {

                 if (data.msg != 'user not found') {
				

                 if (!data.msg) {

                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(data));
                    console.log(localStorage.getItem('currentUser'));   
                   this.router.navigate(['/home']);                          
                }

                    if (data.msg == 'user not found') {

                    if (data.msg) {

                    this.flashMessagesService.show(data.msg, {
		      classes: ['cssClass', 'alert-danger'], // You can pass as many classes as you need
		      timeout: 3000, // Default is 3000
		    });
                     this.loading = false;                        
                }
                    
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                
                });
    }
}


