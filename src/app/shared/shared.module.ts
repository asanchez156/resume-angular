import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FullHeightDirective } from './directives/full-height.directive';
import { LoadingContainerComponent } from './loading-container/loading-container.component';
import { WindowRef } from './services/window-ref.service';

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [LoadingContainerComponent, FullHeightDirective],
  exports: [LoadingContainerComponent, FullHeightDirective, FlexLayoutModule],
  providers: [WindowRef],
})
export class SharedModule {}
