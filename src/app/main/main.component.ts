import { Component, OnInit } from '@angular/core';
import { Avatar } from './main.model';
import { MainService } from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  avatars: Avatar[];

  public isCollapsed = false;
  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.avatars = this.mainService.getMainAvatarList();
  }

}
