import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IpoService } from '../../service/ipo.service';

@Component({
  selector: 'add-ipo',
  templateUrl: './add-ipo.component.html',
  styleUrls: ['./add-ipo.component.css']
})
export class AddIpoComponent implements OnInit {
  addIpoForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ipoService: IpoService,
    private _location: Location
  ) { }

  ngOnInit() {
    this.addIpoForm = this.formBuilder.group({
      ipoId: ['', Validators.required],
      companyCode: ['', Validators.required],
      stockExchangesId: ['', Validators.required],
      sharePrice: ['', Validators.required],
      sharesNum: ['', Validators.required],
      openDateTime: ['', Validators.required],
      remarks: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    this.ipoService.addIPO(this.addIpoForm.value)
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
