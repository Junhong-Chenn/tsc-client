import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationGalleryComponent } from './organization-gallery.component';

describe('OrganizationGalleryComponent', () => {
  let component: OrganizationGalleryComponent;
  let fixture: ComponentFixture<OrganizationGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
