import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/Auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: LoginForm = {
    email: '',
    password: '',
    confirm_password: ''
  }
  passwordMatched: boolean = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  submit() {
    this.passwordMatched = false;
    this.authService.register(this.form)
  }

  isLoading() {
		return this.authService.isLoading;
	}
}
