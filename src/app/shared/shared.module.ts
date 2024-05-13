import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
// import * as _shareSvc from '@share/services';
// import * as _shareCmp from '@share/components';
// import * as _shareDir from '@share/directives';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbThemeModule,
  NbToastrModule,
  NbUserModule,
} from '@nebular/theme';
import { NbSecurityModule } from '@nebular/security';
// import * as _sharePipe from '@share/pipes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxMaskModule } from 'ngx-mask';

import * as kiComponent from './ki-components';

import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomHeaderComponent } from './components';
import { HighLightPipe } from './pipes/highlight.pipe';
// import * as _templates from './components/templates';
// import * as _organisms from './components/organisms';

const component = [
  CustomHeaderComponent,
  kiComponent.KiButtonComponent,
  kiComponent.KiCheckboxComponent,
  kiComponent.KiConfirmationComponent,
  kiComponent.KiDatePickerComponent,
  kiComponent.KiFileInputComponent,
  kiComponent.KiFormGroupComponent,
  kiComponent.KiInputComponent,
  kiComponent.KiSpinnerComponent,
  kiComponent.KiSwitchComponent,
  kiComponent.KiTabComponent,
  kiComponent.KiTabGroupComponent,
  kiComponent.kiSelectComponent,
  kiComponent.kiModalComponent,
  kiComponent.UiTileComponent,
  kiComponent.KiValidationComponent,
  kiComponent.KiTextareaComponent,
  HighLightPipe,
];
@NgModule({
  declarations: [component],
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
    NbThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbToastrModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    NgxMaskModule.forRoot(),
  ],

  providers: [],
  exports: [
    ...component,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule,
    NbUserModule,
    NbButtonModule,
    NbSecurityModule,
    NbSelectModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbToastrModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    NgxMaskModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
