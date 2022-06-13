import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/services/auth/admin-auth/admin-auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent implements OnInit {
  //vars
  httpdata:any;
  
  //post call objects
  httppost:any;
  adminAuthRes:any;
  adminLogged = false;
  isAdmin = false;

  public adminLogin = {uid: undefined, pin: undefined};


  formControl = new FormControl('');

  constructor(public adminAuth: AdminAuthService,private router:Router) { }

  ngOnInit(): void {
    this.adminLogged = false;
    this.isAdmin = false;
  }

  adminLogout() {
    this.adminLogged = this.adminAuth.adminLogout();
    this.isAdmin = false;
    this.adminAuthRes = "";
  }

 
  

 async  loginAdmin(formData:any) {
    console.log("Admin login.....");
    console.log(formData);
    try{
      this.adminAuthRes = await this.adminAuth.adminLogin(formData).toPromise();
      if(this.adminAuthRes.authResp == "Success"){
        this.adminLogged = true;
        this.isAdmin = true;
        console.log("admin logged in succesfuly");
        this.router.navigate([''])
      }
      
    }catch(err){
      console.log(err);
    }
   
  
  }
} 
