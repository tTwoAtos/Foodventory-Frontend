import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductContentPage } from './product-content.page';

describe('ProductContentPage', () => {
  let component: ProductContentPage;
  let fixture: ComponentFixture<ProductContentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
