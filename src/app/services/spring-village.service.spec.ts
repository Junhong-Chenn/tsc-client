import { TestBed } from '@angular/core/testing';

import { SpringVillageService } from './spring-village.service';

describe('SpringVillageService', () => {
  let service: SpringVillageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpringVillageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
