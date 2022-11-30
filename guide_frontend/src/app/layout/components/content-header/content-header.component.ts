import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { AssetCommodityService} from "../../../services/asset-commodity.service";

// ContentHeader component interface
export interface ContentHeader {
  headerTitle: string;
  actionButton: boolean;
}

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html'
})
export class ContentHeaderComponent implements OnChanges {

  // input variable
  @Input() contentHeader: ContentHeader;

  // output variable
  @Output() dataAssetCommodity = new EventEmitter<Object>();

  constructor(private assetCommodityService: AssetCommodityService) {}

  ngOnChanges(changes: SimpleChanges) {}


  loadAssetCommodity() {
    this.assetCommodityService.getAssetCommodity()
        .subscribe((result) => {
          this.dataAssetCommodity.emit(result);
        })
  }

}
