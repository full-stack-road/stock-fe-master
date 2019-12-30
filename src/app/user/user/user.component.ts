import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from '../../common/header/header.component'

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  role: String = "user";

  constructor() { }

  ngOnInit() {
  }

}
