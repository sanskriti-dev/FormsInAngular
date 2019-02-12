import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css']
})
export class AcademicsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  form2 = new FormGroup({
      school10: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      percent10: new FormControl(null, [Validators.required, Validators.pattern('[0-9][0-9][.][0-9][0-9]')]),
      school12: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      percent12: new FormControl(null, [Validators.required, Validators.pattern('[0-9][0-9][.][0-9][0-9]')]),
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required),
      percentgraduation: new FormControl(null, [Validators.required, Validators.pattern('[0-9][0-9][.][0-9][0-9]')]),
      course: new FormControl(null, Validators.required)
    }
  );


}
