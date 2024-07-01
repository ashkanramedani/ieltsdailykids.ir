import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
// import * as _shareSvc from '@share/services';
// import * as _shareCmp from '@share/components';
// import * as _shareDir from '@share/directives';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { translateModuleConfig } from './translate/translate-config.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbContextMenuModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbMenuModule,
  NbRadioModule,
  NbSelectModule,
  NbThemeModule,
  NbToastrModule,
  NbUserModule,
} from '@nebular/theme';
import { NbSecurityModule } from '@nebular/security';
import { NbEvaIconsModule } from '@nebular/eva-icons';
// import * as _sharePipe from '@share/pipes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxMaskModule } from 'ngx-mask';
import * as kiComponent from './ki-components';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerModule } from './date-picker.module';

import {
  CustomHeaderComponent,
  ItemNewsComponent,
  PadcastItemComponent,
  PinCodeComponent,
} from './components';
import { HighLightPipe } from './pipes/highlight.pipe';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { InfoBoxClassComponent } from './components/info-box-class/info-box-class.component';
import { BoxImgPlyComponent } from './components/box-img-ply/box-img-ply.component';
import { ItemShopComponent } from './components/item-shop/item-shop.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { HeaderHomeComponent } from './components/header-home/header-home.component';
// import * as _templates from './components/templates';
// import * as _organisms from './components/organisms';

const component = [
  CustomHeaderComponent,
  PinCodeComponent,
  SwiperComponent,
  FilterBarComponent,
  InfoBoxClassComponent,
  BoxImgPlyComponent,
  ItemShopComponent,
  AccordionComponent,
  HeaderHomeComponent,
  ItemNewsComponent,
  PadcastItemComponent,
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
    DatePickerModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbToastrModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    NbContextMenuModule,
    NbEvaIconsModule,
    TranslateModule.forRoot(translateModuleConfig),
    NgxMaskModule.forRoot(),
    NbMenuModule.forRoot(),
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
    DatePickerModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbToastrModule,
    NbDatepickerModule,
    NbSelectModule,
    NbEvaIconsModule,
    NbIconModule,
    NgxMaskModule,
    NbMenuModule,
    NbContextMenuModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
