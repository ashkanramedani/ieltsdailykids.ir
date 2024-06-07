import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  LayoutComponent,
  LibraryComponent,
  ProductsComponent,
  ProductsDetailsComponent,
  WorkShopComponent,
} from './pages';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'prefix' },
  { component: LibraryComponent, path: 'library' },
  { component: WorkShopComponent, path: 'work-shop' },
  {
    component: LayoutComponent,
    path: 'products',
    children: [
      {
        path: 'list',
        component: ProductsComponent,
      },
      {
        component: ProductsDetailsComponent,
        path: 'detail/:id',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
