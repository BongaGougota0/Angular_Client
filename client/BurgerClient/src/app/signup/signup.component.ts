import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../../assets/css/auth_style.css']
})
export class SignupComponent implements OnInit{
  public registerData = {
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    password:''
  };

  constructor(private authService: AuthService, private route : Router){}

  ngOnInit(): void {
    // Clear form.
    this.registerData = {
      firstName:'',
      lastName:'',
      email:'',
      phone:'',
      password:''
    };
  }

  async onSubmit(){
    if (!this.registerData.firstName || !this.registerData.lastName || !this.registerData.email ||
      !this.registerData.phone || !this.registerData.password) {
      console.log('Form data incomplete:', this.registerData);
      return;
    }

    try {
      const response = await firstValueFrom(this.authService.register(this.registerData));
      this.route.navigate(['login']);
    } catch (error) {
      console.log(`on catch error: ${JSON.stringify(error)}`);
    }
  }

}
