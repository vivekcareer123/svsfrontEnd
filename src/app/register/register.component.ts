import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import {HttpClient} from '@angular/common/http'
import { User } from '../models/user';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

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
  user: User|any;
  selectedCountry: Country|any;
  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    fetch('./assets/commonfiles/countries.json').then(res => res.json())
    .then(jsonData => {
      this.countries = jsonData;
    });
    this.initFormGroups();
  }
  public registerUser(){

  }

  initFormGroups(){
    this.userForm = this.formBuilder.group({user:new FormControl(this.user,[Validators.required])});
  }

}
