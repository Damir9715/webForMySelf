import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.css']
})
export class SetupPageComponent implements OnInit {

  size;

  ngOnInit() {
    this.size = this.usersService.size;
  }

  constructor(private usersService: UserService) { }

  onChange() {
    this.usersService.setSize(+this.size);
  }

}
