import { Component, OnInit } from '@angular/core';
import { WindowOption } from './main.model';
import { MainService } from './main.service';
import { Router } from '@angular/router';
import { Avatar } from '../user-project/avatar/avatar.model';
import { ImageHelpers } from '../helpers/imageHelper';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  avatars: Avatar[];
  isLoad = false;
  windowOptions: WindowOption[];
  public isCollapsed = false;
  constructor(private mainService: MainService, private router: Router) { }

  ngOnInit() {
    this.windowOptions = this.mainService.getWindowOption();
    this.getAvatars();
  }

  public descriptionIsVisible(): boolean {
    const selectDescription = this.windowOptions.find((windowOption: WindowOption) => windowOption.name === 'Description');
    return selectDescription.value;
  }

  public nameIsVisible(): boolean {
    const selectName = this.windowOptions.find((windowOption: WindowOption) => windowOption.name === 'Name');
    return selectName.value;
  }

  public tagsAreVisible(): boolean {
    const selectTags = this.windowOptions.find((windowOption: WindowOption) => windowOption.name === 'Tags');
    return selectTags.value;
  }

  public sharePointsAreVisible(): boolean {
    const selectSharePoints = this.windowOptions.find((windowOption: WindowOption) => windowOption.name === 'Share Points');
    return selectSharePoints.value;
  }

  public changeWindowOptionValue(index: number) {
    this.windowOptions[index].value = !this.windowOptions[index].value;
  }

  private getAvatars() {
    this.mainService.getMainAvatar().subscribe((avatars: Avatar[]) => {
      this.sleep(5000).then(() => {
        this.isLoad = true;
        ImageHelpers.defaultName(avatars);
        this.avatars = avatars;
      })
    });
  }

  private sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
}
