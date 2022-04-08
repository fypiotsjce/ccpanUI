import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/services/auth/admin-auth/admin-auth.service';
import { FormGroup, FormControl } from '@angular/forms';

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
  tempStr:any;
  adminLogged = false;

  public adminLogin = {uid: undefined, pin: undefined};


  formControl = new FormControl('');

  constructor(public adminAuth: AdminAuthService) { }

  ngOnInit(): void {
    this.adminLogged = false;

  }

  adminLogout() {
    this.adminLogged = false;
    this.adminAuthRes = "";
  }

  test() {
    console.log("Admin-auth-comp test getting-data");
    this.adminAuth.test().subscribe((data: {}) => {
      this.httpdata = data;
    });
    console.log("Admin-auth-comp test got-data : ", this.httpdata);
  }

  testpost(a:any) {
    console.log("Admin-auth-comp testpost posting-request");
    this.adminAuth.testpost(a).subscribe(data => {
      this.tempStr = data;
      this.adminAuthRes = this.tempStr.authResp;
      console.log("Admin-auth-comp testpost post-response : ", this.tempStr);
      console.log("Admin-auth-comp testpost post-response AuthRes: ", this.adminAuthRes);
      if (this.tempStr.authCode === '200') {
        this.adminLogged = true;
      }
      else {
        this.adminLogged = false;
      }
    });
  }
} 
