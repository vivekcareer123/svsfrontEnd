import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  register(user: User) {
    return this.http.post(`http://localhost:8080/users/register`, user);
}
}
