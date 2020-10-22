import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public router:Router
  showProjects: boolean;
  showHome: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  route(index) {
  switch (index) {
    case 1:
      this.showHome = true;
    case 2 :
      this.showProjects = true;
  }
}
}
