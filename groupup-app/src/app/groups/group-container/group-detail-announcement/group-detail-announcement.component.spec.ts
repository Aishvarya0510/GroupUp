import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDetailAnnouncementComponent } from './group-detail-announcement.component';

describe('GroupDetailAnnouncementComponent', () => {
  let component: GroupDetailAnnouncementComponent;
  let fixture: ComponentFixture<GroupDetailAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupDetailAnnouncementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupDetailAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
