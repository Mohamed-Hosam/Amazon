import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllElectronicsComponent } from './all-electronics.component';

describe('AllElectronicsComponent', () => {
  let component: AllElectronicsComponent;
  let fixture: ComponentFixture<AllElectronicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllElectronicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllElectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
