import { TestBed } from '@angular/core/testing';

import { MyListGuardService } from './my-list-guard.service';

describe('MyListGuardService', () => {
  let service: MyListGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyListGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
