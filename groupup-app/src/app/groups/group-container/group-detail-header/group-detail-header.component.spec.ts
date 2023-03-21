import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDetailHeaderComponent } from './group-detail-header.component';

describe('GroupDetailHeaderComponent', () => {
  let component: GroupDetailHeaderComponent;
  let fixture: ComponentFixture<GroupDetailHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupDetailHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
