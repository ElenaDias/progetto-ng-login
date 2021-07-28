import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisteredUsersService {
  //Questo registered mi servirà per Guard
  registered= false;
  registeredUsers =[];
  constructor() {}
}
