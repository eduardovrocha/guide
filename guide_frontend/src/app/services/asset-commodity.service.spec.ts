import { TestBed } from '@angular/core/testing';

import { AssetCommodityService } from './asset-commodity.service';

describe('AssetCommodityService', () => {
  let service: AssetCommodityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetCommodityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
