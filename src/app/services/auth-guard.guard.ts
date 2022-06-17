import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminAuthComponent } from '../components/auth/admin-auth/admin-auth.component';
import { AdminAuthService } from './auth/admin-auth/admin-auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UserAuthService } from './auth/user-auth.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor (private adminAuth:AdminAuthService,private snackbar:MatSnackBar,private userAuth:UserAuthService){

  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
      const isLogedIn = this.adminAuth.isLoggedIn || this.userAuth.isLoggedIn;
      if(!isLogedIn){
        this.snackbar.open("You need to Login! as Admin or User.","okay",{duration: 3000})
      }
    return isLogedIn;
  }
  
}
