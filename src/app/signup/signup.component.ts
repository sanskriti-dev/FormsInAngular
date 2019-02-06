import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor() {
  }

  form = new FormGroup({
    firstname: new FormControl(null, [Validators.required]),
    lastname: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    contact: new FormControl(null, [Validators.required, Validators.max(10)]),
    password: new FormControl(null, [Validators.required]),
  confirmpassword: new FormControl(null,[Validators.required])

});

}
