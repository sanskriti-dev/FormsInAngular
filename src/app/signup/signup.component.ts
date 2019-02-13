import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

  }

  form1 = this.fb.group({
    firstname: new FormControl(null, [Validators.required, Validators.pattern('[A-Z][a-zA-Z]*')]),
    lastname: new FormControl(null, [Validators.required, Validators.pattern('[A-Z][a-zA-Z]*')]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    contact: new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]*'), Validators.minLength(10)]),
    gender: new FormControl(null, [Validators.required]),
    Dob: new FormControl(null, Validators.required),
    password: new FormControl(null, [Validators.required, Validators.pattern('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})')]),
    category: new FormControl(null, [Validators.required]),
    confirmpassword: new FormControl(null, [Validators.required], this.ConfirmpasswordValidator)
  });


  ConfirmpasswordValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value !== document.getElementById('id').value) {
          resolve({'Donotmatch': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

}
