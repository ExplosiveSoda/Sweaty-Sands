import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonateComponent } from './container/donate/donate.component';
import { ContainerComponent } from './container/container.component';


const routes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'donate', component: DonateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
