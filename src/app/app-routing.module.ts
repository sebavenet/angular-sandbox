import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: './features/home/home.module#HomeModule', canActivate: [AuthGuard] },
  { path: 'user', loadChildren: './features/user/user.module#UserModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './features/login/login.module#LoginModule' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }