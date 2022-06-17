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
  stateChangeObject:any;
  disableButton:boolean=false;
  
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
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

 async changeState(addr:any,gpio:any,beforeState:any){
    this.disableButton = true;
    let state = this.toggleState(beforeState);
    this.stateChangeObject = {
      "did":this.uid,
      "dapi":this.apiKey,
      "addr":addr,
      "gpio":gpio,
      "state":state
    }
   let stateResponse = await this.http.post(this.apiURL+"5001/device_gui/putdata",this.stateChangeObject,{responseType: 'text'})
   .pipe(
    catchError(this.handleError.bind(this))).toPromise();
   this.disableButton = false;
   this.getDevices()
   console.log(stateResponse);
  }

  toggleState(beforeState:any){
    if(beforeState == 0){
      return 1
    }
    return 0
  }

}
