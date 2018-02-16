import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Http, Response} from '@angular/http';
import {Injectable, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  styles: [`
    .footer {
       bacground:black
    }
`],
  template: `      
       <app-header *ngIf="userIsLogged()"></app-header>

	    <app-headercomman *ngIf="userIsComman()"></app-headercomman>


        <ngx-flash-messages></ngx-flash-messages>
       <router-outlet></router-outlet>
       <app-footer></app-footer>`
})
export class AppComponent {   
    public userData: any;
    constructor( private router: Router) { }  
    userIsLogged(){
    this.userData = localStorage.getItem('currentUser')
        if(!this.userData){
         return false;
    } 
     return true;
    }

	  userIsComman(){
      this.userData = localStorage.getItem('currentUser')
        if(!this.userData){
         return true;
    } 
     return false;
    }

    ngOnInit(){ }
}
