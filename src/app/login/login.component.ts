import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisteredUsersService } from '../registered-users.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser = { name: '', password: '' };
  constructor(
    public myRegUsersService: RegisteredUsersService,
    public router: Router) { }
  //metodo utilizzato al click del tasto login
  login() {
    //console.log('ho cliccato nel login()!!!! ');
    console.log(this.loginUser);
    for (var i = 0; i < this.myRegUsersService.registeredUsers.length; i++) {
      if (this.myRegUsersService.registeredUsers[i].name == this.loginUser.name && this.myRegUsersService.registeredUsers[i].password == this.loginUser.password) {
        this.myRegUsersService.registered = true;
        console.log('******* login.component.ts **** Grazie, tutto combacia');
        
        this.router.navigate(['home']);
      } else {
        window.alert('Ripeti il login')
        this.router.navigate(['login']);
      }
    }

  }

  ngOnInit(): void {
  }
}