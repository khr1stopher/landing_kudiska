import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path:'panel', component: PanelComponent },
];

@NgModule({
  declarations: [PanelComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule,
    SharedModule,
    ComponentsModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PanelModule { }
