import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomemessageService {

  constructor(private http:HttpClient) { }

  getWelcomeMessage(){
    return this.http.get('http://localhost:8080/hello-world',{responseType: 'text'}).subscribe();
  }
}
