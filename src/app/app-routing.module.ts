import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: HomeComponent
},
{
  path: 'contact',
  component: ContactComponent
},
{
  path: 'users',
  loadChildren: 'src/app/users/users.module#UsersModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
