import {
    ComponentFixture,
    async,
    TestBed,
    fakeAsync,
    tick,
} from '@angular/core/testing';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Avatar } from '../user-project/avatar/avatar.model';
import { ImageHelpers } from './imageHelper';

export class MockNgbModalRef {
    result: Promise<any> = new Promise((resolve, reject) => resolve('x'));
}

describe('ImageHelper', () => {

    let avatarList: Avatar[] = [];

    beforeEach(async(() => {

        let avatar: Avatar = {
            AuthorId: '0',
            AuthorName: '',
            CommentNumber: 0,
            Comment_Id: 0,
            Description: '',
            FolderName: '',
            Id: 0,
            ImagesUrl: ['s', 's'],
            Name: 'daj mi kawy',
            PublishDate: new Date(),
            SharePoints: 0,
            Tags: ['', ''],
        };
        avatarList = [avatar];
    }));
    it('first image is incorrect', () => {
        ImageHelpers.defaultName(avatarList);
        expect(avatarList[0].ImagesUrl[0]).toBe(ImageHelpers.defaultUrl);
    });
    it('first image is correct', () => {
        avatarList[0].ImagesUrl[0] = 'dupa.jpg';
        ImageHelpers.defaultName(avatarList);
        expect(avatarList[0].ImagesUrl[0]).toBe('dupa.jpg');
    });
});