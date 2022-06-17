import { Component, OnInit } from '@angular/core';
import { getCookie, setCookie } from 'typescript-cookie'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { consts } from 'src/consts';


@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  apiURL = consts.API_BASE_PATH;
  uid:any;
  apiKey:any;
  userDevices:any;
  isLoading:boolean= false;
  

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.uid = getCookie('uid')
    this.apiKey = getCookie('apiKey');
    this.userDevices = [];
    this.isLoading = false;
    this.getDevices();
  }
 async getDevices(){
   let userParams = new HttpParams();
  userParams = userParams.append('did',this.uid)
  userParams = userParams.append('dapi',this.apiKey)

  this.isLoading = true;
this.userDevices = await this.http
.get<any>(this.apiURL + "5001/device_api/getdata",{params:userParams}).pipe(
  catchError(this.handleError.bind(this)),//without binding this we will loose this context.
).toPromise();
this.isLoading = false;
console.log(this.userDevices);
  }

  handleError(error: any) {
    console.log("handling errors.....");
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
