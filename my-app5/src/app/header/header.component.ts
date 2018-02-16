import { Component, OnInit } from '@angular/core';
import { AlertService, AuthenticationService } from '../service/index';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   
   public userData: any;
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
  ngOnInit() {
   
  }

}
