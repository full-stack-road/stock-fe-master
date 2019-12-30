import { Injectable } from '@angular/core';
import { CompanyInfo } from '../models/admin-add-company.model';
import { Company } from '../models/company.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  //need to be replaced by real backend url
  private addCompanyUrl = 'http://localhost:9000/company/api/v1/add';
  private listCompanyUrl = 'http://localhost:9000/company/api/v1/list';
  private updateCompanyUrl = 'http://localhost:9000/company/api/v1/updateDetails';

  sharedCompany: Company = {
    "companyCode": "",
    "companyName": "",
    "ceo": "",
    "brief": "",
    "directors": "",
    "sectorName": "",
    "stockExchangesId": "",
    "turnover": 0
  }

  company: Company = {
    "companyCode": "",
    "companyName": "",
    "ceo": "",
    "brief": "",
    "directors": "",
    "sectorName": "",
    "stockExchangesId": "",
    "turnover": 0
  }

  private messageSource = new BehaviorSubject(this.sharedCompany);
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: Company) {
    this.messageSource.next(message);
  }

  add(companyInfo: CompanyInfo) {
    this.company.companyCode = companyInfo.companyCode;
    this.company.companyName = companyInfo.companyName;
    this.company.ceo = companyInfo.ceo;
    this.company.brief = companyInfo.brief;
    this.company.directors = companyInfo.directors;
    this.company.sectorName = companyInfo.sectorName;
    this.company.stockExchangesId = companyInfo.stockExchangesId;
    this.company.turnover = companyInfo.turnover;
    //console.log(this.company);
    return this.http.post(this.addCompanyUrl, this.company);
  }

  getCompanies() {
    return this.http.get<Company[]>(this.listCompanyUrl);
  }

  updateCompany(company: Company) {
    return this.http.post(this.updateCompanyUrl, company);
  }

  searchCompanies(term: string): Observable<Company[]> {
    if (!term.trim()) {
      // if not search term, return empty company array.
      return of([]);
    }

    //这个连接才是真正的带搜索条件的return
    return this.http.get<Company[]>('http://localhost:9000/company/api/v1/listlikename?companyName='+term);
  }

}
