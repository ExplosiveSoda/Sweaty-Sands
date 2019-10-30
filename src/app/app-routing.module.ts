import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonateComponent } from './container/donate/donate.component';
import { ContainerComponent } from './container/container.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
