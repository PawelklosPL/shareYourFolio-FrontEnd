import {
    ComponentFixture,
    async,
    TestBed,
    fakeAsync,
    tick,
} from '@angular/core/testing';
import { RemoveAvatarComponent } from './remove-avatar.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Avatar } from '../avatar.model';
import { Table } from '../view-avatar/view-avatar.model';

export class MockNgbModalRef {
    result: Promise<any> = new Promise((resolve, reject) => resolve('x'));
}

describe('RemoveAvatarComponent', () => {
    let fixtureUnderTest: ComponentFixture<RemoveAvatarComponent>;
    let componentUnderTest: RemoveAvatarComponent;
    let modalService: NgbModal;
    const mockModalRef: any = new MockNgbModalRef();

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RemoveAvatarComponent],
            imports: [NgbModule, FormsModule, HttpClientModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();

        fixtureUnderTest = TestBed.createComponent(RemoveAvatarComponent);
        componentUnderTest = fixtureUnderTest.componentInstance;
        modalService = TestBed.get(NgbModal);

        let avatar: Avatar = {
            AuthorId: '0',
            AuthorName: '',
            CommentNumber: 0,
            Comment_Id: 0,
            Description: '',
            FolderName: '',
            Id: 0,
            ImagesUrl: ['', ''],
            Name: 'daj mi kawy',
            PublishDate: new Date(),
            SharePoints: 0,
            Tags: ['', ''],
        };
        let table: Table = {
            avatar: avatar,
            isSelected: true,
        };
        componentUnderTest.row = table;
    }));
    it('should create', () => {
        expect(componentUnderTest).toBeDefined();
    });
    it('should open modal', () => {
        spyOn(modalService, 'open').and.returnValue(mockModalRef);
        componentUnderTest.openModal('<xxxx>');
        expect(modalService.open).toHaveBeenCalledWith('<xxxx>', { size: 'lg' });
    });
    it('should update closeResult when modal closed', fakeAsync(() => {
        spyOn(modalService, 'open').and.returnValue(mockModalRef);
        componentUnderTest.openModal('<xxxx>');
        tick();
        expect(componentUnderTest.closeResult).toBe('Closed with: x');
    }));
    it('should update closeResult when modal dismissed', fakeAsync(() => {
        expect(componentUnderTest.row.avatar.Name).toBe('daj mi kawy');
    }));
});