import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
// import * as _shareSvc from '@share/services';
// import * as _shareCmp from '@share/components';
// import * as _shareDir from '@share/directives';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NbButtonModule, NbSelectModule, NbUserModule } from '@nebular/theme';
import { NbSecurityModule } from '@nebular/security';
// import * as _sharePipe from '@share/pipes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';

import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomHeaderComponent } from './components';
// import * as _templates from './components/templates';
// import * as _organisms from './components/organisms';

const component = [
  CustomHeaderComponent
];
@NgModule({
  declarations: [
...component,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    NgSelectModule,
    NgbModule,
    NbUserModule,
    NbButtonModule,
    NbSecurityModule,
    NbSelectModule,
  ],

  providers: [

  ],
  exports: [
    ...component,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule,
    NbUserModule,
    NbButtonModule,
    NbSecurityModule,
    NbSelectModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {

}
