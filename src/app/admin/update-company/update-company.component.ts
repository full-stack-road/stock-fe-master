import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../../service/company.service';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {
  updateCompanyForm: FormGroup;
  loading = false;
  submitted = false;
  sharedCompany: Company;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private companyService: CompanyService,
    private _location: Location
  ) { }

  ngOnInit() {
    this.companyService.currentMessage.subscribe(message => this.sharedCompany = message)
    this.updateCompanyForm = this.formBuilder.group({
      companyCode: this.sharedCompany.companyCode,
      companyName: this.sharedCompany.companyName,
      turnover: this.sharedCompany.turnover,
      ceo: this.sharedCompany.ceo,
      directors: this.sharedCompany.directors,
      stockExchangesId: this.sharedCompany.stockExchangesId,
      sectorName: this.sharedCompany.sectorName,
      brief: this.sharedCompany.brief
    });
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    this.companyService.updateCompany(this.updateCompanyForm.value)
        .subscribe(
            data => {
                //console.log(data);
                this.backClicked();
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
