import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayPicComponent } from './components/display-pic/display-pic.component';


@NgModule({
  declarations: [
    DisplayPicComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DisplayPicComponent
  ]
})
export class SharedModule { }
