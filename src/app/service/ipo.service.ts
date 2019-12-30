import { Injectable } from '@angular/core';
import { IPO } from '../models/ipo.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpoService {

  constructor(private http: HttpClient) { }

  //need to be replaced by real backend url
  private ipoUrl = 'http://localhost:9000/company/api/v1/ipo/list';
  private updateIpoUrl = 'http://localhost:9000/company/api/v1/ipo/update';
  private userIpoListUrl = 'http://localhost:9000/company/api/v1/ipo/list';
  private addIpoUrl = 'http://localhost:9000/company/api/v1/ipo/add';

  sharedIPO: IPO = {
    ipoId: 0,
    companyCode: "",
    stockExchangesId: "",
    sharePrice: 0.00,
    sharesNum: 0,
    openDateTime: "",
    remarks: "",
  }

  private messageSource = new BehaviorSubject(this.sharedIPO);
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: IPO) {
    this.messageSource.next(message);
  }

  addIPO(ipo: IPO) {
    return this.http.post(this.addIpoUrl, ipo);
  }
  getIPOs() {
    return this.http.get<IPO[]>(this.ipoUrl);
  }

  updateIPO(ipo: IPO) {
    return this.http.post(this.updateIpoUrl, ipo);
  }

  getUserIPOs() {
    return this.http.get<IPO[]>(this.userIpoListUrl);
  }
}
