import { NgModule } from '@angular/core';

import { CoreCommonModule } from '@core/common.module';

import { HorizontalMenuComponent } from 'app/layout/components/menu/horizontal-menu/horizontal-menu.component';

@NgModule({
  declarations: [HorizontalMenuComponent],
  imports: [CoreCommonModule],
  exports: [HorizontalMenuComponent]
})
export class HorizontalMenuModule {}
