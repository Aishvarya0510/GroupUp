import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './groups/group.component';

const routes: Routes = [
  {
    path: 'groups',
    component: GroupComponent,
    loadChildren: () =>
      import('./groups/groups.module').then((m) => m.GroupsModule),
  },
  {
    path: '',
    redirectTo: 'groups',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
