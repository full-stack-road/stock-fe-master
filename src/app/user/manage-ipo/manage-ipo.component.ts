import { Component, OnInit } from '@angular/core';
import { IpoService } from 'src/app/service/ipo.service';
import { IPO } from 'src/app/models/ipo.model';

@Component({
  selector: 'manage-ipo',
  templateUrl: './manage-ipo.component.html',
  styleUrls: ['./manage-ipo.component.css']
})
export class ManageIpoComponent implements OnInit {

  constructor(
    private ipoService: IpoService
  ) { }

  ngOnInit() {
    this.getIpoList();
  }

  ipoList: IPO[];

  getIpoList() {
    this.ipoService.getUserIPOs()
      .subscribe(ipos => this.ipoList = ipos['data']);
  }

}
