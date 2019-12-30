import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  @Input()
  role: String;

  constructor() { }

  ngOnInit() {
    //console.log(this.role);
  }

}
