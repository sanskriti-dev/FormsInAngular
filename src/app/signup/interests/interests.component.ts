import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  interest: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.interest = new FormGroup({
      hobbies: new FormArray([]),
      Inspiration: new FormArray([])
    });
  }

  AddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.interest.get('hobbies')).push(control);
  }

  AddInspirations() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.interest.get('Inspiration')).push(control);
  }
}

