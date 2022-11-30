import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfriendComponent } from './viewfriend.component';

describe('ViewfriendComponent', () => {
  let component: ViewfriendComponent;
  let fixture: ComponentFixture<ViewfriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewfriendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewfriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
