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
  public avatars: Avatar[];

  ngOnInit() {
    let fu: Table[] = [];
    this.avatarService.currentAvatar.subscribe((avatar: any) => {
      if (avatar) {
        avatar.forEach((Avatar: Avatar) => {
          const table: Table = { isSelected: false, avatar: Avatar };
          this.rows.push(table);
        });
        fu = this.rows;
        console.log(this.rows);
      }
    });
    this.rows = fu;
    // this.avatarService.currentAvatar.subscribe((avatar: any) => {
    //   alert(avatar);
    // });
  }

  removeAvatar(avatarId: number) {
    this.avatarService.removeAvatar(avatarId).subscribe(() => {
      let avatar = this.avatars.find((avatar) => {
        return avatar.Id == avatarId;
      });
      this.avatars.splice(this.avatars.indexOf(avatar), 1);
    });
  }

  removeAvatars() {
    alert('!');
  }
}
