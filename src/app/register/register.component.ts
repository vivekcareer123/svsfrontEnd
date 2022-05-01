import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import {HttpClient} from '@angular/common/http'

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
  countries: Country[] = [];
  data = [];
  selectedCountry: Country|any;
  constructor() { }

  ngOnInit(): void {
    
    fetch('./assets/commonfiles/countries.json').then(res => res.json())
    .then(jsonData => {
      this.countries = jsonData;
    });
  }

}
