import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  providers: [DatePipe],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private datePipe: DatePipe) { }

  date:any;
  ngOnInit() {
    this.date= Date.now();
  }

}
