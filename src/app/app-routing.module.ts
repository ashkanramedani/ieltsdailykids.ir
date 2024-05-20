import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './pages';

const routes: Routes = [
  { path: '', redirectTo: 'library', pathMatch: 'prefix' },
  { component: LibraryComponent, path: 'library' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
