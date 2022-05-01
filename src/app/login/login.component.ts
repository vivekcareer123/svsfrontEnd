import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: SocialUser = new SocialUser;
  loggedIn: boolean | any;

   	constructor(private authService: SocialAuthService, private router:Router) {}
  

  ngOnInit(): void {
    this.authService.authState.subscribe(user => {
      localStorage.setItem('userObject', JSON.stringify(user));
      this.user = user;
      console.log(user);
    });
  }
  public signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.router.navigateByUrl('/register');

  }
  public signOut(): void {
    this.authService.signOut();
  }
}
