import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss']
})
export class UserListPage {
  users: User[];

  constructor(private userService: UserService) {}

  ionViewWillEnter() {
    this.userService.getUserList().subscribe(users => (this.users = users));
  }
}
