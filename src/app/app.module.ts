import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbThemeModule } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule,
} from '@nebular/theme';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { IdpModule } from './idp/idp.module';
import { LibraryComponent } from './pages/library/library.component';
import { BookComponent } from './pages/components/book/book.component';
import {
  LayoutComponent,
  ProductsComponent,
  ProductsDetailsComponent,
  WorkShopComponent,
} from './pages';

@NgModule({
  declarations: [
    AppComponent,
    WorkShopComponent,
    LibraryComponent,
    BookComponent,
    ProductsComponent,
    ProductsDetailsComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbButtonModule,
    NgbModule,
    IdpModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
