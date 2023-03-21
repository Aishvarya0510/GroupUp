import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsDetailsContainerComponent } from './group-container/group-details/group-details-container.component';
import { GroupComponent } from './group.component';

const routes: Routes = [
  {path: ':groupId', component: GroupsDetailsContainerComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
