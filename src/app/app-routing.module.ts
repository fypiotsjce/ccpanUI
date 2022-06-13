import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AdminAuthComponent } from './components/auth/admin-auth/admin-auth.component';
import { UserloginComponent } from './components/auth/userlogin/userlogin.component';
import { DevicesComponent } from './components/devices/devices.component';
import { GetStartedComponent } from './components/get-started/get-started/get-started.component';
import { MynetworksComponent } from './components/mynetworks/mynetworks.component';
import { AuthGuardGuard } from './services/auth-guard.guard';

const routes: Routes = [
  {
    path:'',component:GetStartedComponent
  },
  {
    path:'devices',component:DevicesComponent,canActivate:[AuthGuardGuard]
  },
  {
    path:'networks',component:MynetworksComponent,canActivate:[AuthGuardGuard]
  },
  {
    path:'aboutus',component:AboutusComponent
  },
  {
    path:'login',component:UserloginComponent
  },
  {
    path:'admin_login',component:AdminAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
