import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';
import { Router } from '@angular/router';
import { User } from '../user'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  usersList = this.myService.users;
  newUser: User = { id: this.usersList.length + 1, name: '', username: '', email: '' };
  constructor(
    public myService: MyService,
    public router: Router) { }
  add() {
    console.log(this.usersList);
    this.usersList.push(this.newUser);
    console.log(this.usersList);
    this.router.navigate(["home"]);
  }

  ngOnInit(): void {
  }
}
