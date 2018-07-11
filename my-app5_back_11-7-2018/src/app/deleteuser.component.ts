import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Http, Response} from '@angular/http';
import {Injectable, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import {Router, ActivatedRoute} from "@angular/router";
import { FlashMessagesService } from 'ngx-flash-messages';
@Component({
  selector: 'app-root',
  template: '',
})
export class DeleteuserComponent { 
    public userData: any;
    private data;
    private id;
    constructor(private http:Http,private route: ActivatedRoute,private router: Router,private flashMessagesService: FlashMessagesService){
    }
        
             ngOnInit(){ 
         this.userData = localStorage.getItem('currentUser')
        if(!this.userData){
         this.router.navigate(['/login']);
       }
         this.route.params.subscribe(params => {
            this.id = params['id'];
        });
         this.flashMessagesService.show('User delete successfully', {
      classes: ['cssClass', 'alert-success'], // You can pass as many classes as you need
      timeout: 3000, // Default is 3000
    });
    	this.deleteData();
     this.router.navigate(['/view']);
    }
 
        deleteData(){
    this.http.delete('http://192.168.0.1:8183/anurag/users/delete/'+ this.id)
   .subscribe((res:Response) => this.data = res.json());
}
}
