import { Component } from '@angular/core';
//import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oshop';

  /*constructor(private authService: AuthenticationService) {
    if (!localStorage.getItem('authToken')) {
      this.authService.setTempUserId();
    }
    this.authService.setUserDetails();
  }*/
}
