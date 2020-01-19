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

  constructor(private testService: TestService) {

  }

  ngOnInit() {
    this.sendReq();
  }
  sendReq() {
    this.testService.sendReq(this.test.url).subscribe((avatars: Avatar[]) => {
      this.test.status = true;
    }, (error: any) => {
      this.test.status = false;
    })
  }

}
