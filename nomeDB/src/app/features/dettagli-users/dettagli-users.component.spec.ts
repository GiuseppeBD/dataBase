import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliUsersComponent } from './dettagli-users.component';

describe('DettagliUsersComponent', () => {
  let component: DettagliUsersComponent;
  let fixture: ComponentFixture<DettagliUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettagliUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettagliUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
