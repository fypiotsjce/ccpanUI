import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  title = 'Final Year Project';
  banner_text = "Final Year project has started"
}
