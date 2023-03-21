import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDetailEventComponent } from './group-detail-event.component';

describe('GroupDetailEventComponent', () => {
  let component: GroupDetailEventComponent;
  let fixture: ComponentFixture<GroupDetailEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupDetailEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupDetailEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
