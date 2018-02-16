import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import {Http, Response} from '@angular/http';
import {Injectable, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import {Router,Routes, ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './edituser.component.html',
 styleUrls: ['./edituser.component.css']
})
export class EdituserComponent {
          erForm: FormGroup;
          private data;
	  post:any;                     // A property for our submitted form
	  description:string = '';
	  fname:string = '';
           private id;
         public userData:any 
	 constructor(private fb: FormBuilder,private http:Http,private route: ActivatedRoute,private router: Router ) { 	 
	  }
             ngOnInit() {   
        this.userData = localStorage.getItem('currentUser')
        if(!this.userData){
         this.router.navigate(['/login']);
       }
     
        this.route.params.subscribe(params => {
            this.id = params['id'];
        });
             this.getData();
          
             this.erForm = this.fb.group({
        itemRows: this.fb.array([this.initItemRows()]) // here
      });
      }
          initItemRows() { 
         
         return this.fb.group({
         // list all your form controls here, which belongs to your form array
         fname: [''],
       
         email: [''],       
         age: [''],
         address: [''],
         docsfile: [''],
          id:[''] 
                });
          }   
        getData(){
                this.http.get('http://192.168.0.1:8183/anurag/users/view/'+this.id)
                                .subscribe(res => this.data = res.json());
               
            }
      onSubmit(post) {
      console.log(post);
      // this.http.post('http://192.168.0.1:8183/anurag/users/edit', post)
     // .subscribe(res => this.data = console.log(res.json()));
  }
  
}
