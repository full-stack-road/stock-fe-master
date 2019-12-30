import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../service/user.service';
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  //Initialization
  currentUser: User;
  user: User = {
    "userId": "",
    "username": "",
    "password": "",
    "email": "",
    "mobile": "",
    "userType": "",
    "token": ""
  }
  errorMessage: string;
  //pass data to update-details component
  sharedUser: User;

  constructor(
    private userservice: UserService,
    private router: Router
    ) { }

  ngOnInit() {
    this.userservice.currentMessage.subscribe(message => this.sharedUser = message)
    this.getUserInfo();
  }

  
  //main functions
  getUserInfo() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.userservice.getUserDetails(this.currentUser.username)
    .subscribe(
      data => {
         this.user = data['data'];
         //console.log(data);
      },
      error => {
        this.errorMessage = error;
      });  
  }

  updateDetails(item:User){
     this.sharedUser = item;
     this.userservice.changeMessage(this.sharedUser);
      this.router.navigate(['/user/update-details']);
  }

}
