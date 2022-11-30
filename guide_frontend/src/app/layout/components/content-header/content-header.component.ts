import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
export class ContentHeaderComponent implements OnInit {

  // input variable
  @Input() contentHeader: ContentHeader;

  // output variable
  @Output() dataAssetCommodity = new EventEmitter<Object>();

  constructor(private assetCommodityService: AssetCommodityService) {}

  loadAssetCommodity() {
    this.assetCommodityService.getAssetCommodity()
        .subscribe((result) => {
          this.dataAssetCommodity.emit(result);
        })
  }

  ngOnInit() {
  }

}
