import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditProductComponent } from './add-or-edit-product.component';

describe('AddOrEditProductComponent', () => {
  let component: AddOrEditProductComponent;
  let fixture: ComponentFixture<AddOrEditProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrEditProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
