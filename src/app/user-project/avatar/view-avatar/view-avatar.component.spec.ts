import {
    ComponentFixture,
    async,
    TestBed
} from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ViewAvatarComponent } from './view-avatar.component';


describe('ViewAvatarComponent', () => {
    let fixture: ComponentFixture<ViewAvatarComponent>;
    let component: ViewAvatarComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ViewAvatarComponent],
            imports: [NgbModule, FormsModule, HttpClientModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();

        fixture = TestBed.createComponent(ViewAvatarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create component', () => {
        expect(component).toBeDefined();
    });

    it('should display tag working correctly for basic tests', () => {
        const tags = ['abc', 'def', 'gahk'];
        const joinedTags: string = component.displayTags(tags);
        expect(joinedTags).toEqual('#abc #def #gahk');
    });

    it('should display tag working correctly for empty string', () => {
        const tags = ['abc', '', 'gahk'];
        const joinedTags: string = component.displayTags(tags);
        expect(joinedTags).toEqual('#abc #gahk');
    });

    it('should display tag working correctly for all empty strings', () => {
        const tags = ['', '', ''];
        const joinedTags: string = component.displayTags(tags);
        expect(joinedTags).toEqual('');
    });

    it('should display tag working correctly for empty array list', () => {
        const tags = [];
        const joinedTags: string = component.displayTags(tags);
        expect(joinedTags).toEqual('');
    });

    it('should display tag working correctly for empty hashtags', () => {
        const tags = ['#', '##'];
        const joinedTags: string = component.displayTags(tags);
        expect(joinedTags).toEqual('# ##');
    });

    it('should display tag working correctly for empty hashtags', () => {
        const tags = ['#butt', 'boobs', 'abs'];
        const joinedTags: string = component.displayTags(tags);
        expect(joinedTags).toEqual('#butt #boobs #abs');
    });

    it('should display tag working correctly for empty hashtags', () => {
        const tags = ['#butt', '#boobs', '#abs'];
        const joinedTags: string = component.displayTags(tags);
        expect(joinedTags).toEqual('#butt #boobs #abs');
    });

});
