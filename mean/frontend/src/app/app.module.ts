import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {UserService} from './user.service';

import {SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedinLoginProvider} from  'ng4-social-login';

const config = new AuthServiceConfig([
{
  id: GoogleLoginProvider.PROVIDER_ID,
  provider: new GoogleLoginProvider('106810668033-21sorlmopug9pbi579p0thj9rl53rkdc.apps.googleusercontent.com')

},
{
  id: FacebookLoginProvider.PROVIDER_ID,
  provider: new FacebookLoginProvider('2552591094808071')
},


], false );  
export function provideConfig(){
  return config;

}

import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './main-page/main-page.component';
import { InsertBookComponent } from './insert-book/insert-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { BookComponent } from './book/book.component';
import { CartComponent } from './cart/cart.component';
import { ItemComponent } from './item/item.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserhomeComponent,
    MainPageComponent,
    InsertBookComponent,
    UpdateBookComponent,
    BookComponent,
    CartComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [UserService,

    {provide: AuthServiceConfig, useFactory: provideConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
