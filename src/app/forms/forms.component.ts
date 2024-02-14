import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  OnSubmit(f:NgForm){
    console.log(f);
  }
  getValue(data:NgModel){
    console.log(data);
  }
}
