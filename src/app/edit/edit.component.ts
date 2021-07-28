import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { User } from '../user'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:any;
  user:any;

  constructor(public myService:MyService,
    private myActRoute: ActivatedRoute,
    public router:Router) {}

  save(user){
    let conferma = window.confirm("Vuoi salvare");
      if(conferma){
        console.log(this.id-1);
        this.myService.users.splice(this.id-1,1,this.user);
        this.router.navigate(["home"])
      }
    }  
  ngOnInit(){
    this.myActRoute.params
      .subscribe( 
        param => {
          this.id = +param['id']
          //console.log(this.id)
          this.user = this.myService.users[this.id-1];
          //console.log(this.user)
        }
      );
  }

}
