import { Component } from '@angular/core';
import { MyService } from './my.service';
//import { User } from './user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Users / Anagrafica';

  constructor (public myService:MyService){
  }

  ngOnInit(){
    this.myService.myGet();}
}
