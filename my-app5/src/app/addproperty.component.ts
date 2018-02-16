import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import {Http, Response} from '@angular/http';
import {Injectable, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import {Router , Routes, ActivatedRoute} from "@angular/router";
import { PropertyService } from './service/index';
import { FlashMessagesService } from 'ngx-flash-messages';
import { AlertService, UserService } from './service/index';
import { AuthenticationService } from './service/index';

@Component({
  selector: 'app-root',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.css']
})
export class AddpropertyComponent {
         invoiceForm: FormGroup;
          public userData: any;
		    loading = false;
			fileToUpload: File = null;
        
      private data;
	  post:any;                     // A property for our submitted form
	  username:string = '';
	  fname:string = '';
	  docsfile:File = '';
	  constructor(private fb: FormBuilder,private http:Http,private route: ActivatedRoute ,private router: Router,    private propertyService: PropertyService,
        private alertService: AlertService,
        private flashMessagesService: FlashMessagesService,private authenticationService: AuthenticationService) {   	 
	  }

        initItemRows() {
        return this.fb.group({
        // list all your form controls here, which belongs to your form array
		area: [''],  
		locacity: [''],
	    locastate: [''],
		locapin: [''],
        fname: [''],    
        email: [''],       
        age: [''],
		docsfile:[''],
        address: [''],
       
    });
}
         
	addNewRow() {
    // control refers to your formarray
    const control = <FormArray>this.invoiceForm.controls['itemRows'];
    // add new formgroup
    control.push(this.initItemRows());
}
	handleFileInput(files: FileList) {
		this.fileToUpload = files.item(0);
		console.log(this.fileToUpload);
		this.docsfile=this.fileToUpload;
	}
deleteRow(index: number) {
    // control refers to your formarray
    const control = <FormArray>this.invoiceForm.controls['itemRows'];
    // remove the chosen row
    control.removeAt(index);
}
  onSubmit(post) {

   console.log(this.fileToUpload;);
  // this.http.post('http://192.168.0.1:8183/anurag/users/add', JSON.stringify(this.invoiceForm.value))
    //   .subscribe(res => this.data = console.log(res.json()));
	
	 this.loading = true;
        this.propertyService.create(post)
            .subscribe(
                data => {
                   if (data.success){ 
                      this.flashMessagesService.show(data.success, {
		      classes: ['cssClass', 'alert-success'], // You can pass as many classes as you need
		      timeout: 3000, // Default is 3000
		    });

                 //   this.router.navigate(['/login']);

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
 
    ngOnInit() {  
   // this.userData = localStorage.getItem('currentUser')
     //   if(!this.userData){
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
