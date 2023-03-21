import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsDetailsContainerComponent } from './group-container/group-details/group-details-container.component';
import { GroupComponent } from './group.component';


@NgModule({
  declarations: [
    GroupsDetailsContainerComponent,
    GroupComponent
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule
  ]
})
export class GroupsModule { }
