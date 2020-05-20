import { Component, OnInit, Input } from '@angular/core';
import { Table } from '../view-avatar/view-avatar.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AvatarService } from '../avatar.service';

@Component({
  selector: 'app-remove-avatar',
  templateUrl: './remove-avatar.component.html',
  styleUrls: ['./remove-avatar.component.scss']
})



export class RemoveAvatarComponent implements OnInit {
  @Input() row: Table;
  modalReference: any;
  closeResult: string;

  constructor(private modalService: NgbModal, private avatarService: AvatarService) {

  }

  ngOnInit() {
    console.log(this.row);
  }

  public open(content) {
      this.modalReference = this.modalService.open(content);
      this.modalReference.result.then((result) => {
        this.closeResult = 'Closed with: ${result}';
      }, (reason) => {
        this.closeResult = 'const Dismissed ${this.getDismissReason(reason)';
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  'with: ${ reason }';
    }
  }

   public closeModal() {
    this.avatarService.removeAvatar(this.row.avatar.Id).subscribe(() => {
      this.avatarService.removeAvatarFromList(this.row.avatar);
    });
    this.modalReference.close();
   } 
}
