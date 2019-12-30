import { Injectable } from '@angular/core';
import { UserSignUpInfo } from '../models/user-sign-up.model';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //pass data from details-component to update-details-component
  sharedUser: User = {
    "userId": "",
    "username": "",
    "password": "",
    "email": "",
    "mobile": "",
    "userType": "",
    "token": ""
  }

  private messageSource = new BehaviorSubject(this.sharedUser);
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }

  changeMessage(message: User) {
    this.messageSource.next(message);
  }

  //main functions
  register(userSignUpInfo: UserSignUpInfo) {
    //return this.http.post(`${config.apiUrl}/users/register`, user);
    return this.http.post('http://localhost:9000/account/api/v1/add', userSignUpInfo);
    //return this.http.get<any>(this.userUrl);
  }

  updateUser(user: User) {
    return this.http.post('http://localhost:9000/account/api/v1/update', user);
  }

  getUserDetails(username:string) {
    return this.http.get('http://localhost:9000/account/api/v1/query?username='+username);
  }


}
