import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AvatarService } from '../avatar.service';
import { Avatar } from '../avatar.model';

@Component({
  selector: 'app-add-avatar',
  templateUrl: './add-avatar.component.html',
  styleUrls: ['./add-avatar.component.scss']
})
export class AddAvatarComponent implements OnInit {

  constructor(private avatarService: AvatarService) { }
  @ViewChild("avatarForm", {
    static: false
  }) avatarForm: NgForm;

  public editMode: boolean = false;
  public avatarId: number = 0;

  ngOnInit() {
    this.avatarService.clickedAvatarEdit.subscribe((avatar: Avatar) => {
      if (avatar) {
        this.avatarForm.setValue({
          name: avatar.Name,
          folderName: avatar.FolderName,
          description: avatar.Description,
          imagesUrl: avatar.ImagesUrl,
          tags: avatar.Tags[0]
        });
        this.editMode = true;
        this.avatarId = avatar.Id;
      }
    });
  }

  public onSubmit(form: NgForm) {
    if (this.editMode) {
      if (!form.valid) {
        return;
      }
      const avatar: Avatar = new Avatar();
      avatar.Id = this.avatarId;
      avatar.Name = form.value.name;
      avatar.FolderName = form.value.folderName;
      avatar.Description = form.value.description;
      avatar.ImagesUrl = form.value.imagesUrl;
      avatar.Tags = this.divideTags(form.value.tags);
      avatar.AuthorId = '2';
      this.avatarService.editAvatarToSend(avatar).subscribe((avatar: Avatar) => {
        this.avatarService.replaceAvatar(avatar);
      })
    } else {
      if (!form.valid) {
        return;
      }
      const avatar: Avatar = new Avatar();
      avatar.Name = form.value.name;
      avatar.FolderName = form.value.folderName;
      avatar.Description = form.value.description;
      avatar.ImagesUrl = form.value.imagesUrl;
      avatar.Tags = this.divideTags(form.value.tags);
      avatar.AuthorId = '2';
      this.avatarService.createMainAvatar(avatar).subscribe((avatar: Avatar) => {
        this.avatarService.addAvatar(avatar);
      })
    }
  }
  
  private divideTags(avatarTags: string): string[] {
    return avatarTags.split(' ');
  }

  public exitEditMode() {
    this.editMode = false;
  }
}
