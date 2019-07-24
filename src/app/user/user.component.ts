import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user;  // prinimaiu usera iz appComponent

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log('click!');
  }

}
