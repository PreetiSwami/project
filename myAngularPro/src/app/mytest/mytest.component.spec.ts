import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytestComponent } from './mytest.component';

describe('MytestComponent', () => {
  let component: MytestComponent;
  let fixture: ComponentFixture<MytestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MytestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MytestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //to check function test case
  it("testing addition function",()=>{
    expect(component.addition(10,20)).toBe(30);
  })

  //to check string test case
  it("Testing 'toBe' it will perform ===",()=>{
    let msg="Hello Students";
    expect(msg).not.toBe("Hello Students 123")
  })

  it("Testing 'toEqual' it will perform ==",()=>{
    let str="Hello Student";
    expect(str).toEqual("Hello Student")
  })

  it("Testing 'toContain' it will return if any string contain any text",()=>{
    let str="Welcome You All in Firstbit Solution";
    expect(str).toContain("Firstbit");
  })
});
