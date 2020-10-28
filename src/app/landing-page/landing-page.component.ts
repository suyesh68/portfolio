import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  showProjects = false;
  showHome = true;
  showBlogs = false;
  showContact = false;
  constructor() { }

  ngOnInit(): void {
  }
  route(index) {
  switch (index) {
    case 1: {
      this.showHome = true;
      this.showBlogs = false;
      this.showContact = false;
      this.showProjects = false;
      break
    }
    case 2 : {
      this.showHome = false;
      this.showBlogs = false;
      this.showContact = false;
      this.showProjects = true;
      break
         }     case 3 : {
      this.showHome = false;
      this.showBlogs = true;
      this.showContact = false;
      this.showProjects = false;
      break
         }
      case 4 :{
      this.showHome = false;
      this.showBlogs = false;
      this.showContact = true;
      this.showProjects = false;
      break
    }
  }
}
}
