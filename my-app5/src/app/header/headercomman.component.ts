import { Component, OnInit } from '@angular/core';
import { AlertService, AuthenticationService } from '../service/index';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-headercomman',
  templateUrl: './headercomman.component.html',
  styleUrls: ['./headercomman.component.css']
})
export class HeadercommanComponent {
   
   public userData: any;
   public username;
   public jsondata:any;
  constructor(private authenticationService: AuthenticationService,private router: Router) { }
  logout(){
   this.authenticationService.logout();
      this.router.navigate(['/login']);
  }

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
  ngOnInit() {
   
  }

}
