import { Component, OnInit } from '@angular/core';
import { BreakpointObserver,Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map,shareReplay } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private breakpointbserver:BreakpointObserver) { }

  isHandset:Observable<boolean> = this.breakpointbserver.observe([Breakpoints.Handset,]).pipe(
    map((result: { matches: any; }) => result.matches),
    shareReplay(),
  )

  ngOnInit(): void {
  }

}
