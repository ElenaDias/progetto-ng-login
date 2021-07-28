import { Component } from '@angular/core';
import { MyService } from '../my.service';
import { User } from '../user'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  page = 1;
  pageSize = 5;
  constructor( public myService:MyService,
    public router:Router) { }

  ngOnInit(){
    
  }
}
