import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'search'})
export class SearchPipe implements PipeTransform {

  transform(users, value) {

    if (users === undefined) { return users; }

    return users.filter(user => {
      if (user.name !== undefined) {
        return user.name.first.includes(value);
      }
      });
  }
}
