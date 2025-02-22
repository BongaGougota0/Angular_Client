import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ResponseDto } from '../models/response-dto';
import { AuthResponseDto } from '../models/auth-response-dto';
import { DataStorageServiceService } from '../services/data-storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../assets/css/auth_style.css']
})
export class LoginComponent implements OnInit{
  public loginFormGroup: any = {
    email: null,
    password: null
  };
  responseDto!: ResponseDto;

  constructor(private loginService: LoginService,
    private dataStorageService: DataStorageServiceService, private route : Router
  ){}

  ngOnInit(): void {}

  onSubmit(){
    const {email, password} = this.loginFormGroup;
    this.loginService.login({email, password}).subscribe(
      {
        next: (resp : AuthResponseDto) => {
          this.dataStorageService.setUserData(resp);
          //Thereafter ping server with authenticated route.
          this.route.navigate(['products']);
        },
        error: err => {
          console.log(err);
        }
      }
    )
  }

}
