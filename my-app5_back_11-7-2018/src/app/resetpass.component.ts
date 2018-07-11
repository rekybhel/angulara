import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Http, Response} from '@angular/http';
import { HttpModule } from '@angular/http';
import { FlashMessagesService } from 'ngx-flash-messages';
import { AlertService, UserService , AuthenticationService } from './service/index';

@Component({
  selector: 'app-root',
  templateUrl: './resetpass.component.html',
  styleUrls: ['./resetpass.component.css']
})

export class ResetpassComponent {
   model: any = {};
   loading = false;
   public userData ;
   private data;
   id : any = {};
   
 constructor(
        private router: Router,
        private http: Http,
        private userService: UserService,
        private alertService: AlertService,
        private flashMessagesService: FlashMessagesService,
        private authenticationService: AuthenticationService,
       ) { }
    
 ngOnInit() {     
            this.userData  = JSON.parse(localStorage.getItem('currentUser'));
             this.model.id = this.userData[0].id
             console.log(this.model);
		if(!this.userData){
		 this.router.navigate(['/login']);
	    }
         }
 
    resetpassword() {     
         this.userService.resetpass(this.model)
       .subscribe(data => {
                     if (data.error){ 
                      this.flashMessagesService.show(data.error, {
		      classes: ['cssClass', 'alert-danger'], // You can pass as many classes as you need
		      timeout: 3000, // Default is 3000
		    });                 

                     }
                      if (data.success){ 
                      this.flashMessagesService.show('Password changed successfully', {
		      classes: ['cssClass', 'alert-success'], // You can pass as many classes as you need
		      timeout: 3000, // Default is 3000
		    });                 
                     }

                    },
                  error => {
                    this.alertService.error(error);
                    this.loading = false;
                });

    }
	 

}
