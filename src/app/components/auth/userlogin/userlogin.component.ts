import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminAuthService } from 'src/app/services/auth/admin-auth/admin-auth.service';
import { UserAuthService } from 'src/app/services/auth/user-auth.service';
import { getCookie, setCookie } from 'typescript-cookie'

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
/*
Here we have used all the methods of admin login since both will perform the same 
the difference  is the Service injected in constructor.
*/
  
httpdata:any;
  
//post call objects
httppost:any;
adminAuthRes:any;
adminLogged = false;
isAdmin = false;

public adminLogin = {uid: undefined, pin: undefined};


formControl = new FormControl('');

constructor(public userAuth: UserAuthService,private router:Router,private snackbar:MatSnackBar) { }

ngOnInit(): void {
  this.adminLogged = false;
  this.isAdmin = false;
}



async  loginAdmin(formData:any) {
  console.log("user login.....");
  console.log(formData);
  try{
    this.adminAuthRes = await this.userAuth.userLogin(formData).toPromise();
    console.log(this.adminAuthRes)
    console.log(formData.uid)
    if(this.adminAuthRes.authResp == "Success"){
      this.adminLogged = true;
      this.isAdmin = true;
      setCookie('uid',formData.uid);//set uid 
      setCookie('apiKey',this.adminAuthRes.apiKey);// set api key
      console.log("admin logged in succesfuly");
      this.router.navigate([''])
    }
    else if(this.adminAuthRes.authResp == "Error"){
      this.snackbar.open("You have entered the wrong credentatl(P)","okay",{duration: 3000})
      console.log("There was a error logging in")
    }
    
  }catch(err){
    console.log(err);
  }
 

}
}
