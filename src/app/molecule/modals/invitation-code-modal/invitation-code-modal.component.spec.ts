import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InvitationCodeModalComponent } from './invitation-code-modal.component';

describe('InvitationCodeModalComponent', () => {
  let component: InvitationCodeModalComponent;
  let fixture: ComponentFixture<InvitationCodeModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [InvitationCodeModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InvitationCodeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
