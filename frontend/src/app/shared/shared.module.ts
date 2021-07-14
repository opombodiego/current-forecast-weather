import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConditionSlugComponent } from './components/condition-slug/condition-slug.component';
import { AlertErrorComponent } from './components/alert-error/alert-error.component';

@NgModule({
  declarations: [
    ConditionSlugComponent,
    AlertErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ConditionSlugComponent,
    AlertErrorComponent
  ]
})

export class SharedModule { }
