import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsDetailsContainerComponent } from './group-container/group-details/group-details-container.component';
import { GroupComponent } from './group.component';
import { GroupDetailHeaderComponent } from './group-container/group-detail-header/group-detail-header.component';
import { GroupDetailAnnouncementComponent } from './group-container/group-detail-announcement/group-detail-announcement.component';
import { GroupDetailEventComponent } from './group-container/group-detail-event/group-detail-event.component';
import { GroupDetailTodoComponent } from './group-container/group-detail-todo/group-detail-todo.component';
import { GroupMembersComponent } from './group-container/group-members/group-members.component';
import { SharedModule }  from './../shared/shared.module';

@NgModule({
  declarations: [
    GroupsDetailsContainerComponent,
    GroupComponent,
    GroupDetailHeaderComponent,
    GroupDetailAnnouncementComponent,
    GroupDetailEventComponent,
    GroupDetailTodoComponent,
    GroupMembersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GroupsRoutingModule
  ],

})
export class GroupsModule { }
