import { Component, OnInit } from '@angular/core';
import {AuthService, SocialUser, GoogleLoginProvider, FacebookLoginProvider} from 'ng4-social-login';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  title = 'frontend';
  public user: any = SocialUser;
  constructor(private socialAuthService: AuthService){}
  facebooklogin(){
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData) =>{
      this.user = userData;

    });
  }
  googlelogin(){
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) =>{
      this.user = userData;
    });
  }

}
