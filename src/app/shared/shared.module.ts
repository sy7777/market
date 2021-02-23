import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { IconsProviderModule } from '@app/icons-provider.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    NzBreadCrumbModule
  ],
  exports: [
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    NzBreadCrumbModule
],
schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class SharedModule { }
