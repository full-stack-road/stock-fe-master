import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../../service/company.service';

@Component({
  selector: 'add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  addCompanyForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private companyService: CompanyService,
    private _location: Location
  ) { }

  ngOnInit() {
    this.addCompanyForm = this.formBuilder.group({
      companyCode: ['', Validators.required],
      companyName: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      turnover: ['', Validators.required],
      ceo: ['', Validators.required],
      directors: ['', Validators.required],
      brief: ['', Validators.required],
      stockExchangesId: ['', Validators.required],
      sectorName: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    this.companyService.add(this.addCompanyForm.value)
        .subscribe(
            data => {
                //console.log(data);
                this.router.navigate(['/admin']);
            },
            error => {
                // this.alertService.error(error);
                this.loading = false;
            });
  }

  backClicked() {
    this._location.back();
  }
}
