import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  
registerUser(user: Object): Observable<Object> {
  return this.http.post(`${this.baseUrl}/register`, user);
}

getUsers(): Observable<any> {
  return this.http.get(`${this.baseUrl}/users`);
  
}
}
