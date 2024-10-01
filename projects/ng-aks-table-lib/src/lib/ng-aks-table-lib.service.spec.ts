import { TestBed } from '@angular/core/testing';

import { NgAksTableLibService } from './ng-aks-table-lib.service';

describe('NgAksTableLibService', () => {
  let service: NgAksTableLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgAksTableLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
