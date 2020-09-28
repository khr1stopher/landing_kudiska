import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';
// import { PanelComponent } from './panel/panel.component'


const routes: Routes = [
  {path: '', loadChildren: () => import('./inicio/inicio.module').then(mod => mod.InicioModule)},
  {path: '', loadChildren: () => import('./politica/politica.module').then(mod => mod.PoliticaModule)}
];

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule,
    SharedModule,
    ComponentsModule
  ],
  exports: [
    
  ]
})
export class PagesModule { }
