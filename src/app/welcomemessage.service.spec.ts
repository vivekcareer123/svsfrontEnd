import { TestBed } from '@angular/core/testing';

import { WelcomemessageService } from './welcomemessage.service';

describe('WelcomemessageService', () => {
  let service: WelcomemessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WelcomemessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
