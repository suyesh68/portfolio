import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  showProjects = false;
  showHome = false;
  showBlogs = false;
  showContact = false;
  constructor() { }

  ngOnInit(): void {
    this.route(1);
  }
  route(index) {
  switch (index) {
    case 1:
      this.showHome = true;
      this.showBlogs = false;
      this.showContact = false;
      this.showProjects = false;
    case 2 :
      this.showHome = false;
      this.showBlogs = false;
      this.showContact = false;
      this.showProjects = true;
      case 3 :
      this.showHome = false;
      this.showBlogs = true;
      this.showContact = false;
      this.showProjects = false;
      case 4 :
      this.showHome = false;
      this.showBlogs = false;
      this.showContact = true;
      this.showProjects = false;
  }
}
}
