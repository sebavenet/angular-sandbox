import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserNewComponent } from './components/user-new/user-new.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

const userRoutes: Routes = [
  { path: '', component: UserComponent },
  { path: ':id', component: UserDetailComponent },
  { path: 'add/new', component: UserNewComponent },
  { path: 'edit/:id', component: UserEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }