import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxImgPlyComponent } from './box-img-ply.component';

describe('BoxImgPlyComponent', () => {
  let component: BoxImgPlyComponent;
  let fixture: ComponentFixture<BoxImgPlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxImgPlyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxImgPlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
