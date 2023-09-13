import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface AuthResponceData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    return this.http.post<AuthResponceData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAASQ-ds6AWMDqPkvtLqcDK-7q79GSAjZ0',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    ).pipe(
      catchError((errorRes) => {
        let errorMessage = 'An unknown error Occured';
        if (!errorRes.error || errorRes.error.error) {
          return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
          case 'EMAIL_EXISTS':
            errorMessage = 'This email already Exists';
        }
        return throwError(errorMessage);
      })
    );;
  }
}
