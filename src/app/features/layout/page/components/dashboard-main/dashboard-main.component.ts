import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-dashboard-main',
    templateUrl: './dashboard-main.component.html',
    styleUrls: ['./dashboard-main.component.scss'],
    standalone: true
})
export class DashboardMainComponent implements OnInit {

  // form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.form = this.fb.group({
    //   name: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   message: ['', Validators.minLength(10)]
    // });
  }


}
