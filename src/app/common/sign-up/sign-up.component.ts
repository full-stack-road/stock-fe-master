import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../service/authentication.service';
import { UserService } from '../../service/user.service';
import {CustomValidators} from '../../../app/common/sign-up/customValdators';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    signUpForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/manage-ipo']);
        }
    }

    ngOnInit() {
        this.signUpForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.minLength(6)],
            reEnterPassword: ['', [Validators.required, Validators.minLength(6)]],
            email: ['', [Validators.required, Validators.email]],
            mobile: ['', [ Validators.required, CustomValidators.invalidPhone ]]
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.signUpForm.controls; }
    
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.signUpForm.invalid) {
                    return;
        }
        this.loading = true;

        this.userService.register(this.signUpForm.value)
            .subscribe(
                data => {
                    this.router.navigate(['/sign-in']);
                },
                error => {
                    // this.alertService.error(error);
                    this.loading = false;
                });
    }

}
