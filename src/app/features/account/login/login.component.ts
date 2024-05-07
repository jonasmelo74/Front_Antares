import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../shared/account.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, NgIf]
})
export class LoginComponent {
  cadastroForm = this.formBuilder.group({
    user: ['', Validators.required],
    password: ['', Validators.required]
  });

  nextStep: boolean = false;
  
  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private accountService: AccountService
    ) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const result = await this.accountService.login(this.cadastroForm.value);
      console.log(`Login efeturado: ${result}`);

      this.router.navigate(['']);
    } catch (error) {
      console.error(error);
    }
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
