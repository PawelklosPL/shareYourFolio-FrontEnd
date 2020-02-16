import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AvatarService } from '../avatar.service';
import { Avatar } from '../avatar.model';

@Component({
  selector: 'app-add-avatar',
  templateUrl: './add-avatar.component.html',
  styleUrls: ['./add-avatar.component.scss']
})
export class AddAvatarComponent implements OnInit {

  constructor(private avatarService:AvatarService) { }

  ngOnInit() {
  }

  public onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    let avatar:Avatar = new Avatar();
    avatar.Name = form.value.name;
    avatar.FolderName = form.value.folderName;
    avatar.Description = form.value.description;
    avatar.ImagesUrl = form.value.imagesUrl;
    avatar.Tags = this.divideTags(form.value.tags);
    avatar.AuthorId = '2';
    this.avatarService.createMainAvatar(avatar).subscribe((avatar:Avatar) => {
      this.avatarService.addAvatar(avatar);
    })
  }
    private divideTags(avatarTags: string): string[] {
      return avatarTags.split(" ");  
    }
}
