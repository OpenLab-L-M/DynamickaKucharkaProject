import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptyDetailsPageComponent } from './recepty-details-page.component';

describe('ReceptyDetailsPageComponent', () => {
  let component: ReceptyDetailsPageComponent;
  let fixture: ComponentFixture<ReceptyDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceptyDetailsPageComponent]
    });
    fixture = TestBed.createComponent(ReceptyDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
