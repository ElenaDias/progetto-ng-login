import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DeleteComponent } from './delete/delete.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MyListGuardService } from './my-list-guard.service';

const routes: Routes = [
  { path:'', component: RegisterComponent},
  { path: 'login', component: LoginComponent },
  { path: 'home', component:HomeComponent,  canActivate: [ MyListGuardService]},
  { path:'add', component:AddComponent}, 
  { path:'edit', component:EditComponent},
  { path:'delete/:id', component:DeleteComponent},
  { path: 'edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
