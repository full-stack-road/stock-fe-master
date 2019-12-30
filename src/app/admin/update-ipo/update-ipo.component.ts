import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IpoService } from '../../service/ipo.service';
import { IPO } from 'src/app/models/ipo.model';

@Component({
  selector: 'update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIpoComponent implements OnInit {
  updateIpoForm: FormGroup;
  loading = false;
  submitted = false;
  sharedIPO: IPO;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ipoService: IpoService,
    private _location: Location
  ) { }

  ngOnInit() {
    this.ipoService.currentMessage.subscribe(message => this.sharedIPO = message)
    this.updateIpoForm = this.formBuilder.group({
      ipoId: this.sharedIPO.ipoId,
      companyCode: this.sharedIPO.companyCode,
      stockExchangesId: this.sharedIPO.stockExchangesId,
      sharePrice: this.sharedIPO.sharePrice,
      sharesNum: this.sharedIPO.sharesNum,
      openDateTime: this.sharedIPO.openDateTime,
      remarks: this.sharedIPO.remarks
    });
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    this.ipoService.updateIPO(this.updateIpoForm.value)
        .subscribe(
            data => {
                //console.log(data);
                this.backClicked();
                //this.router.navigate(['/admin']);
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
