import { TestBed } from '@angular/core/testing';

import { SavePetService } from './save-pet.service';

describe('SavePetService', () => {
  let service: SavePetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavePetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
