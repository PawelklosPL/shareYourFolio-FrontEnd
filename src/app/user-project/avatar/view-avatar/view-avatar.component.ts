import { Component, OnInit } from '@angular/core';
import { Avatar } from '../avatar.model';
import { AvatarService } from '../avatar.service';
import { Table } from './view-avatar.model';

@Component({
  selector: 'app-view-avatar',
  templateUrl: './view-avatar.component.html',
  styleUrls: ['./view-avatar.component.scss']
})
export class ViewAvatarComponent implements OnInit {

  constructor(private avatarService: AvatarService) { }
  public rows: Table[] = [];

  ngOnInit() {
    this.avatarService.currentAvatar.subscribe((avatar: any) => {
      if (avatar) {
        this.rows = [];
        avatar.forEach((Avatar: Avatar) => {
          const table: Table = { isSelected: false, avatar: Avatar };
          this.rows.push(table);
        });
      }
    });
  }

  removeAvatar(avatarId: number) {
    this.avatarService.removeAvatar(avatarId).subscribe(() => {
      const row = this.rows.find((row) => {
        return row.avatar.Id === avatarId;
      });
      this.rows.splice(this.rows.indexOf(row), 1);
      this.avatarService.removeAvatarFromList(row.avatar);
    });
  }

  editAvatar(avatar: Avatar) {
    this.avatarService.editAvatar(avatar);
  }

  removeAvatars() {
    alert('!');
  }
}
