import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ResponseDto } from '../models/response-dto';
import { DataStorageServiceService } from '../services/data-storage-service.service';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../assets/css/auth_style.css']
})
export class LoginComponent implements OnInit {
  public loginData = {
    email: '',
    password: ''
  };

  responseDto!: ResponseDto;

  constructor(
    private loginService: LoginService,
    private dataStorageService: DataStorageServiceService, 
    private route: Router
  ) {}

  ngOnInit(): void {
    // Clear form data on init
    this.loginData = {
      email: '',
      password: ''
    };
  }

  async onSubmit() {
    if (!this.loginData.email || !this.loginData.password) {
      console.log('Form data incomplete:', this.loginData);
      return;
    }
    try {
      const response = await firstValueFrom(this.loginService.login({
        email: this.loginData.email,
        password: this.loginData.password
      }));
      if (response.token) {
        this.dataStorageService.setUserData(response);
        this.route.navigate(['products']);
      }

    } catch (error: any) {
        console.error(error);
    }
  }
}