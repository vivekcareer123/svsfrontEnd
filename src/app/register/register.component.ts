import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import {HttpClient} from '@angular/common/http'
import { User } from '../models/user';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { PasswordValidator } from '../validators/password-validator';
import { RegisterService } from '../services/register.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WelcomemessageService } from '../welcomemessage.service';

interface Country {
  name: string,
  code: string
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public userForm : FormGroup| any;
  countries: Country[] = [];
  data = [];
  user: User = new User;
  selectedCountry: Country|any;
  constructor(private readonly formBuilder: FormBuilder,private registerService : RegisterService, private router: Router,private route:ActivatedRoute,private welcomeservice:WelcomemessageService) { }
  submitted = false;

  ngOnInit(): void {
    
    fetch('./assets/commonfiles/countries.json').then(res => res.json())
    .then(jsonData => {
      this.countries = jsonData;
    });
    this.initFormGroups();
  }
  public registerUser(){
    this.user.role='customer';
   this.registerService.registerUser(this.user).subscribe(data => console.log(data), error => console.log(error));

  }

  onSubmit() {
    this.submitted = true;
    this.registerUser();    
  }
  getWelcomeMessage(){
this.welcomeservice.getWelcomeMessage();
  }
  initFormGroups(){
    this.userForm = this.formBuilder.group({
      userName: [this.user.userName, [Validators.required, Validators.minLength(3)]],
      firstName: [this.user.firstName, [Validators.required, Validators.minLength(3)]],
      lastName: [this.user.lastName, [Validators.required, Validators.minLength(3)]],
      password :[this.user.password,[Validators.required]],
      confirm_password :[this.user.passConfirm,[Validators.required]],
      country :[this.user.country,[Validators.required]],
      email :[this.user.email,[Validators.required]]
    })
  }

}
