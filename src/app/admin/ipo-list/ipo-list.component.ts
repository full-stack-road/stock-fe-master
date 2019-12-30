import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IpoService } from '../../service/ipo.service';
import { IPO } from 'src/app/models/ipo.model';

@Component({
  selector: 'app-ipo-list',
  templateUrl: './ipo-list.component.html',
  styleUrls: ['./ipo-list.component.css']
})
export class IpoListComponent implements OnInit {

  results = [];
  loading = false; 
  sharedIPO: IPO;

  constructor(
    private router: Router,
    private ipoService: IpoService
  ) { }

  ngOnInit() {
    this.ipoService.currentMessage.subscribe(message => this.sharedIPO = message)
    this.loadIPOs();
  }

  private loadIPOs() {
    this.ipoService.getIPOs()
        .subscribe(
            IPOs => {
                this.results = IPOs['data'];
            },
            error => {
                // this.alertService.error(error);
                this.loading = false;
            });
   
  }

  updateIPO(item:IPO) {
    this.sharedIPO = item;
    this.ipoService.changeMessage(this.sharedIPO);
     this.router.navigate(['/admin/update-ipo']);
  }

}
