import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageScannerPage } from './page-scanner.page';

describe('PageScannerPage', () => {
  let component: PageScannerPage;
  let fixture: ComponentFixture<PageScannerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageScannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
