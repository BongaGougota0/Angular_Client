import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponseDto } from '../models/auth-response-dto';
import { LoginCredentialsDto } from '../models/login-credentials-dto';
import { RegisterData } from '../models/register-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private base_url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

   login(loginCredentials: LoginCredentialsDto): Observable<AuthResponseDto>{
    return this.http.post<AuthResponseDto>(`${this.base_url}/authenticate`, loginCredentials);
   }

   register(registerData : RegisterData): Observable<any>{
    return this.http.post<any>(`${this.base_url}/users/register`, registerData);
   }
}
