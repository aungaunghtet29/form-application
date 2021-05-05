import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppValidator } from './app-validator';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {


  form : FormGroup;


  constructor(private builder : FormBuilder) {
      this.form = builder.group({
        name : ["", Validators.required],
        phone : ["" , Validators.required],
        email : ["" ,Validators.compose([Validators.required , Validators.email])]
      });
   }

   getStatus(name : string){
      return this.form.get(name)?.valid ? 'fa-check' : 'fa-times';
   }

   get validationStatus(){
     return {
       form : this.form.valid ? 'Valid' : 'Invalid',
       name : this.form.get('name')?.valid ? 'Valid' : 'Invalid',
       phone : this.form.get('phone')?.valid ? 'Valid' : 'Invalid',
       email : this.form.get('email')?.valid ? 'Valid' : 'Invalid'
     }
   }


  ngOnInit(): void {
  }

  save(){
    console.log(JSON.stringify(this.form.value));
  }

  showError(name : string){
    return(
      this.form.get(name)?.invalid && (this.form.get(name)?.dirty || this.form.get(name)?.touched)
    );
  }

}
