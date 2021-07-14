import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeteorologicalComponent } from './meteorological.component';

const routes: Routes = [
  { path: '', component: MeteorologicalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MeteorologicalRoutingModule { }
