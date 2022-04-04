import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MynetworksComponent } from './mynetworks.component';

describe('MynetworksComponent', () => {
  let component: MynetworksComponent;
  let fixture: ComponentFixture<MynetworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MynetworksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MynetworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
