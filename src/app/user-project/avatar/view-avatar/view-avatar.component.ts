import { Component, OnInit } from '@angular/core';
import { Avatar } from '../avatar.model';
import { AvatarService } from '../avatar.service';

@Component({
  selector: 'app-view-avatar',
  templateUrl: './view-avatar.component.html',
  styleUrls: ['./view-avatar.component.scss']
})
export class ViewAvatarComponent implements OnInit {

  constructor(private avatarService:AvatarService) { }

  public avatars: Avatar[];

  ngOnInit() {
    this.avatarService.getMainAvatar().subscribe((avatars:Avatar[])=>{
      this.avatars = avatars;
    });
  }
  removeAvatar(avatarId: number) {
    this.avatarService.removeAvatar(avatarId).subscribe(()=> {
      let avatar = this.avatars.find((avatar)=>{
        return avatar.Id == avatarId;
      });
      this.avatars.splice(this.avatars.indexOf(avatar), 1);
    });
  }

}
