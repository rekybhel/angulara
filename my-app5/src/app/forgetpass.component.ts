import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import {Http, Response} from '@angular/http';
import {Injectable, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import {Router , Routes, ActivatedRoute} from "@angular/router";
import { AlertService, UserService } from './service/index';
import { FlashMessagesService } from 'ngx-flash-messages';


@Component({
  selector: 'app-root',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent {
      
 // onSubmit(post) {
  // console.log(post);
  // this.http.post('http://192.168.0.1:8183/anurag/users/forgetpassword', JSON.stringify(this.invoiceForm.value))
    //   .subscribe(res => this.data = console.log(res.json()));
 // }

    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private flashMessagesService : FlashMessagesService ) { }

    fgtpass() {
        this.loading = true;
        
        this.userService.fgtpassword(this.model)
            .subscribe(
                data => {
                     this.flashMessagesService.show(data.msg, {
		      classes: ['cssClass', 'alert-danger'], // You can pass as many classes as you need
		      timeout: 3000, // Default is 3000
                     });
                     this.loading = false;
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
 
   ngOnInit() {}

}
