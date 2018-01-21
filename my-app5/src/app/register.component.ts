import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';
import { AlertService, UserService } from './service/index';
import { AuthenticationService } from './service/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private flashMessagesService: FlashMessagesService,
        private authenticationService: AuthenticationService) { }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                   if (data.success){ 
                      this.flashMessagesService.show(data.success, {
		      classes: ['cssClass', 'alert-success'], // You can pass as many classes as you need
		      timeout: 3000, // Default is 3000
		    });

                    this.router.navigate(['/login']);

                     }
                     if (data.error){ 
                      this.flashMessagesService.show(data.error, {
		      classes: ['cssClass', 'alert-dannger'], // You can pass as many classes as you need
		      timeout: 3000, // Default is 3000
		    });
                     }
                      this.loading = false;
                      this.authenticationService.logout();
                     console.log(data.msg)
       
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}

