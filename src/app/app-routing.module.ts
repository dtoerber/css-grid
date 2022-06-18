import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexComponent } from './flex/flex.component';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  { path: '', redirectTo: '/grid', pathMatch: 'full' },
  {
    path: 'grid',
    component: GridComponent,
  },
  {
    path: 'flex',
    component: FlexComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
