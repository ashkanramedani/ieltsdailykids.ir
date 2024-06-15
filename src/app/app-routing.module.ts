import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ClassPageComponent,
  CoursComponent,
  CoursEnglishComponent,
  CoursFrenchComponent,
  FrenchComponent,
  FrequentlyQuestionsComponent,
  LayoutComponent,
  LibraryComponent,
  PlacementComponent,
  ProductsComponent,
  ProductsDetailsComponent,
  WorkShopComponent,
} from './pages';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'prefix' },
  { component: LibraryComponent, path: 'library' },
  { component: WorkShopComponent, path: 'work-shop' },
  { component: CoursComponent, path: 'cours' },
  { component: CoursEnglishComponent, path: 'cours-english' },
  { component: CoursFrenchComponent, path: 'cours-french' },
  { component: FrenchComponent, path: 'french' },
  { component: ClassPageComponent, path: 'class' },
  { component: PlacementComponent, path: 'placement' },
  { component: FrequentlyQuestionsComponent, path: 'questions' },
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
