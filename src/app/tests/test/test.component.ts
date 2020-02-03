import { Component, OnInit, Input } from '@angular/core';
import { Test } from '../tests.model';
import { TestService } from './test.service';
import { Avatar } from 'src/app/user-project/avatar/avatar.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @Input() test: Test;
  private response: String;
  private sliceNumber: number = 100;

  constructor(private testService: TestService) {

  }
  public showMore(){
    if(this.sliceNumber == 100)
    {
      this.sliceNumber = 100000;
    }else
    {
      this.sliceNumber = 100;
    }
  }

  ngOnInit() {
    this.sendReq();
  }
  sendReq() {
    if(this.test.type == "get")
    {
      this.testService.sendGetReq(this.test.url).subscribe((avatars: Avatar[]) => {
        this.response = JSON.stringify(avatars);
        this.test.status = true;
      }, (error: any) => {
        this.response = JSON.stringify(error);
        this.test.status = false;
      })
    } else if(this.test.type == "post")
    {
      this.testService.sendPostReq(this.test.url, this.test.postBody).subscribe((avatars: Avatar[]) => {
        this.response = JSON.stringify(avatars);
        this.test.status = true;
      }, (error: any) => {
        this.response = JSON.stringify(error);
        this.test.status = false;
      })
    }

  }
  sendReqAgane(){
    this.sliceNumber = 100;
    this.response = "";
    this.test.status = false;
    this.sendReq();
  }

}
