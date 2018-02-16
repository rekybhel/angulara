import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';
import { AlertService, UserService } from './service/index';
import { AuthenticationService } from './service/index';


@Component({
    moduleId: module.id,
    templateUrl: 'passwordreset.component.html'
})

export class PasswordresetComponent {
    model: any = {};
    loading = false;
    private id;
    private token;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private flashMessagesService: FlashMessagesService,
        private authenticationService: AuthenticationService) { }

       ngOnInit(){        
         this.route.params.subscribe(params => {
            this.id = params['id'];
            this.model.token = this.id;
        });        
    }

    changepassword() { 
      console.log(this.model);
        this.userService.changepass(this.model)
       .subscribe(data => {
                     if (data.error){ 
                      this.flashMessagesService.show(data.error, {
		      classes: ['cssClass', 'alert-danger'], 
		      timeout: 3000, // Default is 3000
		    });                 

                     }
                      if (data.success){ 
                      this.flashMessagesService.show('Password changed successfully', {
		      classes: ['cssClass', 'alert-success'], 
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

