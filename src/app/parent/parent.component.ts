import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  users: any[] = [];

  addUser(user: any) {
    this.users.push(user);
  }
}
