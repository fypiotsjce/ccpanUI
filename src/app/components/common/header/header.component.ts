import { Component, OnInit } from '@angular/core';
import { BreakpointObserver,Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map,shareReplay } from 'rxjs';
import { AdminAuthService } from 'src/app/services/auth/admin-auth/admin-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private breakpointbserver:BreakpointObserver,public adminAuth: AdminAuthService) { }

  isHandset:Observable<boolean> = this.breakpointbserver.observe([Breakpoints.Handset,]).pipe(
    map((result: { matches: any; }) => result.matches),
    shareReplay(),
  )
  isAdminUser = false;
  isLogged = false;

  ngOnInit(): void {
    this.isAdminUser = this.adminAuth.isAdmin;
    this.isLogged = this.adminAuth.isLoggedIn;
   
  }

  isAdmin(){
    return this.adminAuth.isAdmin;
  }

  isLoggedIn(){
    return this.adminAuth.isLoggedIn;
  }

 logout(){
   this.adminAuth.adminLogout();
 }

}
