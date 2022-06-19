import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockComponent } from './block/block.component';
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
  {
    path: 'block',
    component: BlockComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
