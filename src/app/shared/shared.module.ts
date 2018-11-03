import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingContainerComponent } from './loading-container/loading-container.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FullHeightDirective } from './directives/full-height.directive';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [
    LoadingContainerComponent,
    FullHeightDirective
  ],
  exports: [
    LoadingContainerComponent,
    FullHeightDirective,
    FlexLayoutModule
  ]
})
export class SharedModule { }
