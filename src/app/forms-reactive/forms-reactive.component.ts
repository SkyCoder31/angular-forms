import { Component } from '@angular/core';
import { FormGroup,NgForm,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-reactive',
  templateUrl: './forms-reactive.component.html',
  styleUrls: ['./forms-reactive.component.css']
})
export class FormsReactiveComponent {

form:any

constructor(){
  this.form=new FormGroup({
    fullName:new FormControl("",
    [
    
      Validators.required,
      Validators.minLength(5)
    ]),
    email:new FormControl("",
      [
      Validators.required,
      Validators.minLength(4),
      Validators.email
    ]),
    address: new FormControl("",
      [
      Validators.required,
      Validators.minLength(4)
    ])
  });
}
get fullName(){
  return this.form.get("fullName");
}
get email(){
  return this.form.get("email");
}
get address(){
  return this.form.get("address");
}

onSubmit(data:FormGroup){
  console.log(data);
}

}
