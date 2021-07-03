import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }
  navigateBack(){
    this.route.navigate(['../users'],{relativeTo:this.activatedRoute})
  }


}
