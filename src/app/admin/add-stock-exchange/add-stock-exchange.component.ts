import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StockService } from '../../service/stock.service';

@Component({
  selector: 'add-stock-exchange',
  templateUrl: './add-stock-exchange.component.html',
  styleUrls: ['./add-stock-exchange.component.css']
})
export class AddStockExchangeComponent implements OnInit {

  addStockExchangeForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private stockService: StockService,
    private _location: Location
  ) { }

  ngOnInit() {
    this.addStockExchangeForm = this.formBuilder.group({
      stockExchangesId: ['', Validators.required],
      stockExchangeBrief: ['', Validators.required],
      contactAddress: ['', Validators.required],
      contactNumber: ['', Validators.required],
      remarks:  ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    this.stockService.add(this.addStockExchangeForm.value)
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
