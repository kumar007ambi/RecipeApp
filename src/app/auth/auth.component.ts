import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponceData, AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'auth-app',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = '';

  constructor(private authService: AuthService) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;

    // let authObs: Observable<AuthResponceData>;

    if (this.isLoginMode) {
    //  authObs = this.authService.login(email, password);
    this.isLoading = false;
    } else {
      //authObs = this.authService.signup(email, password);
      this.authService.signup(email,password).subscribe(resData=>{
        console.log(resData)
      },error=>{
        console.log(error)
      })
      this.isLoading = false;
    }
    // authObs.subscribe(
    //   (resData) => {
    //     console.log(resData);
    //     this.isLoading = false;
    //   },
    //   (errorMessage) => {
    //     console.log(errorMessage);
    //     this.error = errorMessage;
    //     this.isLoading = false;
    //   }
    // );
    form.reset();
  }
}
