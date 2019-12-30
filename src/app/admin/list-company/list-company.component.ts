import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../../service/company.service';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {
  results = [];
  loading = false; 
  sharedCompany: Company;

  constructor(
    private router: Router,
    private companyService: CompanyService
  ) { }

  ngOnInit() {
    this.companyService.currentMessage.subscribe(message => this.sharedCompany = message)
    this.loadCompanies();
  }

  private loadCompanies() {
    this.companyService.getCompanies()
        .subscribe(
            companies => {
                //console.log(companies);
                this.results = companies['data'];
            },
            error => {
                // this.alertService.error(error);
                this.loading = false;
            });
  }

  updateCompany(item:Company){
    this.sharedCompany = item;
    this.companyService.changeMessage(this.sharedCompany);
     this.router.navigate(['/admin/update-company']);
 }

}
