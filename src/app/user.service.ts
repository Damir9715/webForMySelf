import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {

  size = 8;

  setSize(size) {
    this.size = size;
  }

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=' + this.size + '&nat=gd');
  }
}
