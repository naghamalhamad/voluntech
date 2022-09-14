import { TestBed } from '@angular/core/testing';

import { PictureuploadService } from './pictureupload.service';

describe('PictureuploadService', () => {
  let service: PictureuploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PictureuploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
