import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { consts } from 'src/consts';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { getCookie, removeCookie, setCookie } from 'typescript-cookie'


@Injectable({
  providedIn: 'root'
})
export class UserAuthService implements OnInit{
  apiURL = consts.API_BASE_PATH;
  response = '';
  isLoggedIn = false;

  constructor(private http: HttpClient,private router:Router,private snackbar:MatSnackBar) {
  }
  ngOnInit(): void {
    this.isLoggedIn = false;
  }
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

//adminLogout
  userLogout(){
    console.log("loggin out admmin");
    this.isLoggedIn = false;
    this.router.navigate([''])
    removeCookie('uid');
    removeCookie('apiKey');
    console.log("cleared the cookies ")
    return false;
  }
  userLogin(formdata:any) {
    console.log("user auth login");
    this.isLoggedIn = true;
    return this.http
    .post(this.apiURL + "5003/user_auth", formdata).pipe(
      
      catchError(this.handleError.bind(this)),//without binding this we will loose this context.
    );
  }

  handleError(error: any) {
    console.log("handling errors.....");
   this.isLoggedIn = false;
   this.snackbar.open("You have entered the wrong uid and pin","okay",{duration: 3000})
    
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\n error Message: ${error.message}`;
    }
    return throwError(() => {
      return errorMessage;
    });
  }
}
