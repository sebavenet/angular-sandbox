import { TestBed } from '@angular/core/testing';

import { ParentChildInteractionService } from './parent-child-interaction.service';

describe('ParentChildInteractionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParentChildInteractionService = TestBed.get(ParentChildInteractionService);
    expect(service).toBeTruthy();
  });
});
