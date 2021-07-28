import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisteredUsersService } from '../registered-users.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  nuovoUser = {name:'', password:''};

  constructor( 
    public myRegUsersService:RegisteredUsersService,
    public router:Router) { }
    
  //Metodo per registrare l'user
  register(){
    console.log('******* registered.comp.ts **** click register --- FUNZIONA? Si');
    console.log(this.nuovoUser);
    this.myRegUsersService.registeredUsers.push(this.nuovoUser);
    this.router.navigate(['login']);
  }
  ngOnInit(): void {
  }

}
