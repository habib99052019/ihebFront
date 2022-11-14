import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LundingPageComponent } from './lunding-page.component';

describe('LundingPageComponent', () => {
  let component: LundingPageComponent;
  let fixture: ComponentFixture<LundingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LundingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LundingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
