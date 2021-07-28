import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { User } from '../user'

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id:number;
  usersList = this.myService.users;
  user:User = { id: this.usersList.length + 1, name: '', username: '', email: '' };
  constructor( 
    private myActRoute: ActivatedRoute,
    public myService:MyService,
    public router:Router) { }

  ngOnInit(): void {
    this.myActRoute.params.subscribe(
      params => {
        this.id = +params['id'];
        console.log(this.id);
        this.user = this.usersList[this.id-1];
        console.log(this.usersList[this.id-1]);
      }
    );
  }
  delete(user){
    console.log(this.user);
    this.usersList.splice(this.usersList.indexOf(this.user), 1);
    for (let i = 1; i < this.usersList.length; i+= 1){
      if(this.usersList[i].id > (user.id)){
        this.usersList[i].id -= 1;
      }
    }
    this.router.navigate(["home"])
    }
}
