import { Component, OnInit } from '@angular/core';

import { faCalendarTimes } from '@fortawesome/free-solid-svg-icons';
import { testChart1, testChart2, testChart3 } from './testChartData';
import { Subject, Observable } from 'rxjs';
import { CompanyService } from 'src/app/service/company.service';
import { Company } from 'src/app/models/company.model';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'compare-details',
  templateUrl: './compare-details.component.html',
  styleUrls: ['./compare-details.component.css']
})
export class CompareDetailsComponent implements OnInit {

  switch = true
  //companies$: Observable<Company[]>
  companies$ = []
  private searchTerms = new Subject<string>()

  //显示引用fortawesome
  faCalendarTimes = faCalendarTimes

  //用来记录表单内容以及提交到后端的参数
  companyName = ''
  companyList = []
  mapParamaters = {
    "companyOrSector": "Company",
    "bseOrNse": "NSE",
    "companys": "",
    "dateStart": "",
    "dateTo": ""
  }
  //传给compare charts组件的参数
  chartType: String = "1"
  chartData: Object

  constructor(private companyService: CompanyService) { }

  add2List() {
    if (this.companyName.trim() && !this.companyList.includes(this.companyName)) {
      this.companyList.push(this.companyName.trim())
    }
  }

  setChartType() {
    if (this.mapParamaters.companyOrSector === "Sector") {
      this.chartType = "1"
      this.compareDiffSectorsOverSpecPeriod()
      this.chartData = testChart1
    } else if (this.mapParamaters.companyOrSector === "Company" && this.companyList.length === 1) {
      this.chartType = "2"
      this.compareSingleCompanyOverDiffPeriodOfTime()
      this.chartData = testChart2
    } else if (this.mapParamaters.companyOrSector === "Company" && this.companyList.length > 1) {
      this.chartType = "3"
      this.compareDiffCompaniesOverSpecPeriod()
      this.chartData = testChart3
    }
  }

  searchCompany(term: string): void {
    this.searchTerms.next(term)
  }

  choseCompany(companyName: string) {
    this.companyName = companyName
    this.add2List()
  }

  onSubmit() {
    this.setChartType()
    this.mapParamaters.companys = this.companyList.toString();
    if (!this.mapParamaters.dateStart) {
      let date = new Date()
      this.mapParamaters.dateStart = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate()
    }
    //window.alert(JSON.stringify(this.mapParamaters));
    this.switchView()
  }

  onReset() {
    this.companyList = []
  }

  switchView() {
    this.switch = !this.switch;
  }

  ngOnInit() {
   
    this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap( term => {
        return this.companyService.searchCompanies(term)
      }),
    ).subscribe(
      companies => {
          this.companies$ = companies['data'];
      },
      error => {
          // this.alertService.error(error);
          //this.loading = false;
      });;
  }

  private compareDiffSectorsOverSpecPeriod(){
    testChart1.series[0].data = [ 
      { value: 100, name: 'IBM' },
    { value: 200, name: 'HP' }
    ]
  }

  private compareSingleCompanyOverDiffPeriodOfTime() {
    testChart2.xAxis.data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    testChart2.series[0].data = [820, 932, 901, 934, 1290, 1330, 1320];
  }

  private compareDiffCompaniesOverSpecPeriod(){
    testChart3.legend.data = ['IBM','HP'];
    testChart3.xAxis[0].data = ['12/1','12/2','12/3'];
    testChart3.series[0].name  = 'IBM';
    testChart3.series[0].data  = [320, 332, 301];
    testChart3.series[1].name  = 'HP';
    testChart3.series[1].data  = [120, 132, 101];
  }

}
