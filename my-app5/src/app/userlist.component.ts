import {Http, Response} from '@angular/http';
import {Injectable, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmComponent } from './confirm.component';
import { DialogService } from "ng2-bootstrap-modal";

@Component({
  selector: 'app-root',
  template: `<table class="table">
  <thead class="thead-inverse">
    <tr>
      <th>Id</th>
      <th>Username</th>
      <th>Name</th>
      <th>Email</th>
      <th>City</th>
      <th>Age</th>
      <th>Address</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr  *ngFor="let person of data | paginate: { itemsPerPage: 10, currentPage: p }">
        <td>{{person.id}}</td>
	<td>{{person.username}}</td>
	<td>{{person.name}}</td>
	<td>{{person.email}}</td>
	<td>{{person.city}}</td>
	<td>{{person.age}}</td>
	<td>{{person.address}}</td>
        <td><a routerLink="/edit/{{person.id}}"><img src="assets/img/edit.png" height="15" width="15" class="editlogo"></a>/<button (click)="showConfirm(person.id)"><img src="assets/img/remove.png" height="15" width="15" class="editlogo"></button></td>
    </tr>
  </tbody>
</table>
 <pagination-controls (pageChange)="p = $event"></pagination-controls>
 `
})
export class UserlistComponent {
   public userData: any;
   private data;
 
    constructor(private http:Http, private router: Router, private dialogService:DialogService){
    }
     
      showConfirm(id : any){
        
        let disposable = this.dialogService.addDialog(ConfirmComponent, {
                title:'Confirm title', 
                message:'Confirm message'})
                .subscribe((isConfirmed)=>{
                    //We get dialog result
                    if(isConfirmed) {
                       
                       this.router.navigate(['/delete/'+id]);
                    }
                    else {
                       return false;
                    }
                });
            //We can close dialog calling disposable.unsubscribe();
            //If dialog was not closed manually close it by timeout
            setTimeout(()=>{
                disposable.unsubscribe();
            },10000);
       }
 
    ngOnInit(){
         this.userData = localStorage.getItem('currentUser')
        if(!this.userData){
         this.router.navigate(['/login']);
       }
    	this.getData();
    }
 
    getData(){
        this.http.get('http://192.168.0.1:8183/anurag/users')
        		.subscribe(res => this.data = res.json());
                      
    }

  
}
