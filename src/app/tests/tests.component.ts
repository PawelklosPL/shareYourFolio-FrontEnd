import { Component, OnInit } from '@angular/core';
import { Tests, Test } from './tests.model';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {

  constructor() { }
  currentTests: Tests = new Tests();


  ngOnInit() {
    this.feed();
  }
  feed() {

    let userTestStatus: Test[] = [
      { "name": "Avatar - Get", "url": "/Avatar", "status": false },
      { "name": "Avatar - Details", "url": "/Avatar/Details/5", "status": false },
      { "name": "Avatar - Create", "url": "/Avatar/Create", "status": false },
      { "name": "Avatar - Remove", "url": "/Avatar/Remove/5", "status": false },
      { "name": "Avatar - Edit", "url": "/Avatar/Edit", "status": false },
    ];
    this.currentTests.tests = userTestStatus;
  }

}
