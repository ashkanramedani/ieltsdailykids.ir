import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBoxClassComponent } from './info-box-class.component';

describe('InfoBoxClassComponent', () => {
  let component: InfoBoxClassComponent;
  let fixture: ComponentFixture<InfoBoxClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoBoxClassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoBoxClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
