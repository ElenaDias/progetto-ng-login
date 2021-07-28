import { Injectable } from '@angular/core';
import { RegisteredUsersService } from './registered-users.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyListGuardService implements CanActivate  {

  constructor( public loggedUs:RegisteredUsersService,
    public router:Router) { }
    canActivate(){
      if (this.loggedUs.registered){
        console.log('La guardia dice: "Sì, puoi passare" ');
        return true;
      } else {
        //alert('******* MYLISTGUARD service **** La guardia dice: "ALT, fai la registrazione" ');
        this.router.navigate(['']);
        return false;
      }
    } 
}
