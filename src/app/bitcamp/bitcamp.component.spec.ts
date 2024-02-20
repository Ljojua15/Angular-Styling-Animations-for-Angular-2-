import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcampComponent } from './bitcamp.component';

describe('BitcampComponent', () => {
  let component: BitcampComponent;
  let fixture: ComponentFixture<BitcampComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BitcampComponent]
    });
    fixture = TestBed.createComponent(BitcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
