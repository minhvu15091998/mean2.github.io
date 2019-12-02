import { Component } from '@angular/core';
import {AuthService, SocialUser, GoogleLoginProvider, FacebookLoginProvider} from 'ng4-social-login';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
 
  constructor(){}
  
}
