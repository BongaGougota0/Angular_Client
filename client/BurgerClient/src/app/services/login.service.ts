import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCredentialsDto } from '../models/login-credentials-dto';
import { Observable } from 'rxjs';
import { ResponseDto } from '../models/response-dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginPost = 'http://localhost:8080/api/auth/login';

  constructor(private http: HttpClient) {

   }

   login(loginCredentials: LoginCredentialsDto): Observable<ResponseDto>{
    return this.http.post<ResponseDto>(`${this.loginPost}`, loginCredentials);
   }
}
