import { Injectable } from '@angular/core';
import { AuthResponseDto } from '../models/auth-response-dto';

@Injectable({
  providedIn: 'root'
})
export class DataStorageServiceService {
  private readonly token: string = 'USER_TOKEN';
  private readonly role: string = 'USER_ROLE';
  private readonly username: string = 'USERNAME';

  constructor() { }

  setUserData(userData : AuthResponseDto): void{
    window.sessionStorage.setItem(this.username, JSON.stringify(userData.username));
    window.sessionStorage.setItem(this.token, JSON.stringify(userData.token));
    window.sessionStorage.setItem(this.role, JSON.stringify(userData.role));
  }

  getUserEmail(): string | null{
    return window.sessionStorage.getItem(this.username);
  }

  clearAuthData(): void{
    window.sessionStorage.clear();
  }
}
