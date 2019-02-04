import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {

  constructor() {
  }

  form = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.max(3)]),
    Password: new FormControl(null, [Validators.required])
  });
}
