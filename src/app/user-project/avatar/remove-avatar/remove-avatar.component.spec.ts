import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAvatarComponent } from './remove-avatar.component';

describe('RemoveAvatarComponent', () => {
  let component: RemoveAvatarComponent;
  let fixture: ComponentFixture<RemoveAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
