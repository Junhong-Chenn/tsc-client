/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrganizationGalleryService } from './organization-gallery.service';

describe('Service: OrganizationGallery', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizationGalleryService]
    });
  });

  it('should ...', inject([OrganizationGalleryService], (service: OrganizationGalleryService) => {
    expect(service).toBeTruthy();
  }));
});
