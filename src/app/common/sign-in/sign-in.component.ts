import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthenticationService } from '../../service/authentication.service';
import {Router} from '@angular/router';


@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInFormAdmin: FormGroup;
  signInFormUser: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.signInFormAdmin = this.formBuilder.group({
      adminuser: ['', Validators.required],
      admin_password : ['', Validators.required]
    });
    this.signInFormUser = this.formBuilder.group({
      username: ['', Validators.required],
      user_password : ['', Validators.required]
    });
  }
  onSubmit() {
    const username = this.signInFormUser.get('username').value;
    const adminuser = this.signInFormAdmin.get('adminuser').value;
    const admin_password = this.signInFormAdmin.get('admin_password').value;
    const user_password = this.signInFormUser.get('user_password').value;

    if (username!=null && username!=""){
      let userSignInInfo = {
        "username": username,
        "password": user_password
      }
      this.authenticationService.login(userSignInInfo)
      .subscribe(
        data => {
            this.router.navigate(['/user']);
        },
        error => {
          this.errorMessage = error;
        });
        
 
    } 
    else{
      let adminSignInInfo = {
        "username": adminuser,
        "password": admin_password
      }
      this.authenticationService.login(adminSignInInfo)
        .subscribe(
          data => {
              this.router.navigate(['/admin']);
          },
          error => {
            this.errorMessage = error;
          });  
  }}
 
}
