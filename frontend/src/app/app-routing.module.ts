import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateComponent } from './template/template.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', children: [
    {
      path: '', component: TemplateComponent, children: [
        { path: '', component: DashboardComponent },
        {
          path: 'meteorological',
          loadChildren: () => import('./modules/meteorological/meteorological.module').then(m => m.MeteorologicalModule)
        }
      ]
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
