import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface AuthResponceData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http.post<AuthResponceData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAASQ-ds6AWMDqPkvtLqcDK-7q79GSAjZ0',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
}
