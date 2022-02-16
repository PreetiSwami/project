import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdDataCompComponent } from './std-data-comp.component';

describe('StdDataCompComponent', () => {
  let component: StdDataCompComponent;
  let fixture: ComponentFixture<StdDataCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdDataCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdDataCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //it('should create', () => {
   // expect(component).toBeTruthy();
  //});
});
