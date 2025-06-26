import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifSearchedComponent } from './gif-searched.component';

describe('GifSearchedComponent', () => {
  let component: GifSearchedComponent;
  let fixture: ComponentFixture<GifSearchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifSearchedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifSearchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
