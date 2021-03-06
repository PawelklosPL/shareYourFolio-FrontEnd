import { Component, OnInit } from '@angular/core';
import { Avatar } from '../avatar.model';
import { AvatarService } from '../avatar.service';
import { Table } from './view-avatar.model';
import { ImageHelpers } from 'src/app/helpers/imageHelper';


@Component({
  selector: 'app-view-avatar',
  templateUrl: './view-avatar.component.html',
  styleUrls: ['./view-avatar.component.scss']
})
export class ViewAvatarComponent implements OnInit {

  constructor(private avatarService: AvatarService) { }
  public rows: Table[] = [];
  public page: number = 1;
  public pageSize: number = 5;
  public collectionSize: number = 11;
  public sortNumbers: string[] = ['3', '5', '10'];
  public selectedSortNumber: string = '3';

  ngOnInit() {
    this.getAvatar();
  }

  getAvatar() {
    this.avatarService.currentAvatar.subscribe((avatar: any) => {
      if (avatar) {
        ImageHelpers.defaultName(avatar);
        this.rows = [];
        avatar.forEach((Avatar: Avatar) => {
          const table: Table = { isSelected: false, avatar: Avatar };
          this.rows.push(table);
        });
      }
    });
  }

  editAvatar(avatar: Avatar) {
    this.avatarService.editAvatar(avatar);
  }

  removeAvatars() {
    const avatarIds: number[] = [];
    this.rows.forEach((row: Table) => {
      if (row.isSelected) {
        avatarIds.push(row.avatar.Id);
      }
    });
    this.avatarService.removeAvatars(avatarIds).subscribe((isSuccess: boolean) => {
      if (isSuccess) {
        avatarIds.forEach((avatarId: number) => {
          const deleteRow = this.rows.find((rows: Table) => {
            rows.avatar.Id === avatarId;
          });
          this.rows.splice(this.rows.indexOf(deleteRow), 1);
        });
        this.avatarService.removeAvatarsFromList(avatarIds);
      }
    });
  }

  selectAvatar(row: Table) {
    row.isSelected = !row.isSelected;
  }


  displayTags(joinedTags: string[]): string {
    joinedTags = joinedTags.filter(Boolean);
    for (let index = 0; index < joinedTags.length; index++) {
      if (joinedTags[index][0] != '#') {
        joinedTags[index] = '#' + joinedTags[index] + ' ';
      } else {
        joinedTags[index] = joinedTags[index] + ' ';
      }
    }
    return joinedTags.join('').trim();
  }

  public selectSortNumber(selectedSortNumber: string) {
    this.pageSize = Number(selectedSortNumber);
  }

}
