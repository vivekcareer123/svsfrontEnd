import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocialLoginModule,SocialAuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomecontentComponent } from './homecontent/homecontent.component';
import { RegisterComponent } from './register/register.component';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ImageModule} from 'primeng/image'
import { environment } from 'src/environments/environment';
import {DropdownModule} from 'primeng/dropdown';
import { PasswordModule } from "primeng/password";
import { Observable } from 'rxjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './commonservice/token-interceptor.service';


const CLIENT_ID = '579259502924-j6sbr6uefatu8c272h7330qeg0jer603.apps.googleusercontent.com';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    LoginComponent,
    ProfileComponent,
    HomecontentComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    FormsModule,
    BrowserAnimationsModule,
    ImageModule,
    SocialLoginModule,
    DropdownModule,
    PasswordModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              CLIENT_ID
            )
          },
          {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true
          }
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
