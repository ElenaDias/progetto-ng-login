import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MyService {
  users:any=[]; 
  url = 'https://jsonplaceholder.typicode.com/users';

  constructor( public myHttp : HttpClient ) { }

  myGet(){
    this.myHttp.get(this.url)
    .subscribe(
      response => {
        //console.log(response);
        this.users = response;},
        error => console.error('error: ' + error),
        () => console.log('completed')
    );
  }

}
