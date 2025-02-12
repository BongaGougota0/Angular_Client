import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { ResponseDto } from '../models/response-dto';
import { LoginCredentialsDto } from '../models/login-credentials-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./assets/css/auth_style.css']
})
export class LoginComponent implements OnInit{
  loginFormGroup!: FormGroup;
  responseDto!: ResponseDto;

  constructor(private formGroupBuilder: FormBuilder,private loginService: LoginService){}

  ngOnInit(): void {
    this.loginFormGroup = this.formGroupBuilder.group({
      loginDetails : this.formGroupBuilder.group({
        email: [''],
        username: [''],
        password: ['']
      })
    })
  }

  onSubmit(){
    const loginData = new LoginCredentialsDto(
      this.loginFormGroup.get('email')?.value.email,
      this.loginFormGroup.get('username')?.value.username, 
      this.loginFormGroup.get('password')?.value.password);
    this.loginService.login(loginData).subscribe(
      data => this.responseDto = data
    )
  }

}
