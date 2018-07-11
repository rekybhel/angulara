import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import {Http, Response} from '@angular/http';
import {Injectable, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Router , Routes, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent {
         invoiceForm: FormGroup;
          public userData: any;
        
          private data;
	  post:any;                     // A property for our submitted form
	  username:string = '';
	  fname:string = '';
	  constructor(private fb: FormBuilder,private http:Http,private route: ActivatedRoute ,private router: Router) {   	 
	  }

        initItemRows() {
        return this.fb.group({
        // list all your form controls here, which belongs to your form array
        productname: [''],    
        price: [''],       
        category_id: [''],
        ptype: [''],
        docsfile: [''],
        product_details:['']
    });
}
         
	addNewRow() {
    // control refers to your formarray
    const control = <FormArray>this.invoiceForm.controls['itemRows'];
    // add new formgroup
    control.push(this.initItemRows());
}

deleteRow(index: number) {
    // control refers to your formarray
    const control = <FormArray>this.invoiceForm.controls['itemRows'];
    // remove the chosen row
    control.removeAt(index);
}
  onSubmit(post) {
 //  console.log(post);
  // this.http.post('http://192.168.0.1:8183/anurag/users/add', JSON.stringify(this.invoiceForm.value))
    //   .subscribe(res => this.data = console.log(res.json()));
  }
 
    ngOnInit() {  
    //this.userData = localStorage.getItem('currentUser')
      //  if(!this.userData){
      //   this.router.navigate(['/login']);
     //  }
      this.invoiceForm = this.fb.group({
      'fname': ['', Validators.required],
      'email': ['', [Validators.required]],
     
      
    }); 
    this.invoiceForm = this.fb.group({
    itemRows: this.fb.array([this.initItemRows()]) // here
  });
   

   }

}

