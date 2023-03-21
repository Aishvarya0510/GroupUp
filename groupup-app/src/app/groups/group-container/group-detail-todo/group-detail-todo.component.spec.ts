import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDetailTodoComponent } from './group-detail-todo.component';

describe('GroupDetailTodoComponent', () => {
  let component: GroupDetailTodoComponent;
  let fixture: ComponentFixture<GroupDetailTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupDetailTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupDetailTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
