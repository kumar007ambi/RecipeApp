import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Recipe App';
  constructor(private authService: AuthService, private loggerService: LoggingService) { }
  ngOnInit() {
    this.authService.autoLogin();
    //this.loggerService.printLog('Hello from App Component ngOnInit')
  }

}
