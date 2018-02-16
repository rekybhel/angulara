import {Http, Response} from '@angular/http';
import {Injectable, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public userData: any;
  public username;
  public jsondata:any;
     constructor( private router: Router) { }
     ngOnInit() {

     //this.userData = localStorage.getItem('currentUser')
     //  if(!this.userData){
      //   this.router.navigate(['/login']);
     //  } 
    //   this.jsondata  = JSON.parse(this.userData);
    //   this.username =  this.jsondata[0].username;

      // this.userData = localStorage.getItem('currentUser')
       // if(!this.userData){
       //  this.router.navigate(['/login']);
    //   } 
       this.jsondata  = JSON.parse(this.userData);
       this.username =  this.jsondata[0].username;

    }
}
