import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { MeteorologicalComponent } from './meteorological.component';
import { MeteorologicalRoutingModule } from './meteorological-routing.module';

@NgModule({
  declarations: [
    MeteorologicalComponent
  ],
  imports: [
    CommonModule,
    MeteorologicalRoutingModule,
    SharedModule
  ]
})

export class MeteorologicalModule { }
