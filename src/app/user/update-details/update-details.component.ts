import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {
  user: User = {
    "userId": "",
    "username": "",
    "password": "",
    "email": "",
    "mobile": "",
    "userType": "",
    "token": ""
  }
  reenterPassword: String;
  //receive data from details-component
  sharedUser: User;


  constructor(
    private userservice: UserService,
    private location: Location
  ) { }

  ngOnInit() {
    this.userservice.currentMessage.subscribe(message => this.sharedUser = message)
    this.user = this.sharedUser;
  }

  onSubmit() {
    this.save();
  }

  save(): void {
    this.userservice.updateUser(this.user)
      .subscribe(
        () => {
          //
          localStorage.removeItem("currentUser");
          localStorage.setItem("currentUser", JSON.stringify(this.user));
          this.goBack()
        });
  }

  goBack(): void {
    this.location.back();
  }

}
