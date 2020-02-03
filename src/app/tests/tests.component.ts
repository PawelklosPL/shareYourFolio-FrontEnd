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

    var createObject: any = {
      "Id": 0,
      "Name": "AvatarNew123123",
      "AuthorName": "Jack",
      "AuthorId": "2",
      "FolderName": "Najdowszy DESC",
      "Description": "Najdowszy DESC ",
      "PublishDate": 12345,
      "ImagesUrl": [
          "/assets/temp/1.jpg",
          "/assets/temp/2.jpg",
          "/assets/temp/3.jpg"
      ],
      "Tags": [
          "tagi4",
          "tagi5"
      ],
      "SharePoints": 0,
      "Comment_Id": 11,
      "CommentNumber": 11
    }

    let userTestStatus: Test[] = [
      { "name": "Avatar - Get", "url": "/Avatar", "status": false, "type":"get" },
      { "name": "Avatar - Details", "url": "/Avatar/Details/14", "status": false, "type":"get" },
      { "name": "Avatar - Create", "url": "/Avatar/Create", "status": false, "type":"post", "postBody" : createObject },
      // { "name": "Avatar - Remove", "url": "/Avatar/Remove/5", "status": false },
      { "name": "Avatar - Edit", "url": "/Avatar/Edit", "status": false, "type":"get" },
    ];
    this.currentTests.tests = userTestStatus;
  }

}
