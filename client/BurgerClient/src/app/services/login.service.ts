import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCredentialsDto } from '../models/login-credentials-dto';
import { Observable } from 'rxjs';
import { AuthResponseDto } from '../models/auth-response-dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginPost = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

   login(loginCredentials: LoginCredentialsDto): Observable<AuthResponseDto>{
    return this.http.post<AuthResponseDto>(`${this.loginPost}/authenticate`, loginCredentials);
   }
}
