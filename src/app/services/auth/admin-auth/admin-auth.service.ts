import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { consts } from 'src/consts';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthService implements OnInit{
  apiURL = consts.API_BASE_PATH;
  isAdmin:boolean = false;
  response = '';
  isLoggedIn = false;
  constructor(private http: HttpClient,private router:Router) { }


  ngOnInit(): void {
    this.isAdmin = false;
    this.isLoggedIn = false;
  }
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  adminLogout(){
    console.log("loggin out admmin");
    this.isAdmin = false;
    this.isLoggedIn = false;
    this.router.navigate([''])
    return false;
  }
  

  adminLogin(formdata:any) {
    console.log("Adm-auth-service testpost posting-data");
    this.isAdmin = true;
    this.isLoggedIn = true;
    return this.http
    .post(this.apiURL + "5004/admin_auth", formdata).pipe(
      
      catchError(this.handleError.bind(this)),//without binding this we will loose this context.
    );
  }



    handleError(error: any) {
      console.log("handling errors.....");
     this.isAdmin = false;
     this.isLoggedIn = false;
      
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(() => {
        return errorMessage;
      });
    }
}
