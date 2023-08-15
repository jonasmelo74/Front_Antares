import { Component } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  cadastroForm = this.formBuilder.group({
    user: ['', Validators.required],
    password: ['', Validators.required]
  });
  nextStep: boolean = false;
  
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  valid(): void{
    this.nextStep = !this.nextStep;
    if (this.cadastroForm.valid) {
      console.log('aqui')
      this.router.navigate(['home'])
    } else {
      this.nextStep = true;
    }
  }
}
