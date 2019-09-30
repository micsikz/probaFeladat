import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserForeverComponent } from './delete-user-forever.component';

describe('DeleteUserForeverComponent', () => {
  let component: DeleteUserForeverComponent;
  let fixture: ComponentFixture<DeleteUserForeverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteUserForeverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserForeverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
