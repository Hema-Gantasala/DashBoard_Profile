import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }
  navigateBack(){
    this.route.navigate(['../users'],{relativeTo:this.activatedRoute})
  }
}
