import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RemoveAvatarComponent } from './remove-avatar.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { Avatar } from '../avatar.model';
import { Table } from '../view-avatar/view-avatar.model';

describe('RemoveAvatarComponent', () => {
    let component: RemoveAvatarComponent;
    let fixture: ComponentFixture<RemoveAvatarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                RemoveAvatarComponent
            ],
            imports: [
                NgbModule,
                FormsModule,
                HttpClientModule
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ],

        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(RemoveAvatarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        let avatar: Avatar = {
            AuthorId: '0', AuthorName: '',
            CommentNumber: 0,
            Comment_Id: 0,
            Description: '',
            FolderName: '',
            Id: 0, ImagesUrl: ['', ''],
            Name: 'daj mi kawy',
            PublishDate: new Date(),
            SharePoints: 0,
            Tags: ['', '']
        };
        let table: Table = {
            avatar: avatar,
            isSelected: true
        };
        component.row = table;
    });
    it('should create', () => {
        expect(component).toBeDefined();
    });
    it('name', () => {
        let button = fixture.debugElement.nativeElement.querySelector('button');
        button.click();
    });
});

