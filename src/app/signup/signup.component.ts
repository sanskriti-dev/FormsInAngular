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

  form1 = new FormGroup({
    firstname: new FormControl(null, [Validators.required]),
    lastname: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    contact: new FormControl(null, [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
    Dob: new FormControl(null, Validators.required),
    password: new FormControl(null, [Validators.required]),
    category: new FormControl(null, [Validators.required]),
    confirmpassword: new FormControl(null, [Validators.required])

  });

}
