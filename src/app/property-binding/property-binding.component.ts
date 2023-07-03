import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss'],
})
export class PropertyBindingComponent implements OnInit {
  users = [
    {
      id: 1,
      username: 'Rajee',
      role: 'Admin',
    },
    {
      id: 2,
      username: 'Dipika',
      role: 'Moderator',
    },
    {
      id: 3,
      username: 'charan',
      role: 'User',
    },
  ];
  ngOnInit(): void {}
  public addUser(user: any) {
    console.log(user);
  }
  public editUser(user: any) {
    console.log(user);
  }
  public deleteUser(user: any) {
    console.log(user);
  }
}
