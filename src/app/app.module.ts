import { ErrorInterceptorService } from './_modules/auth/services/error-interceptor.service';
import { AuthGuard } from './_modules/auth/services/auth.guard';
import { InMemoryApisService } from './_shared/mocks/services/in-memory-apis.service';
import { SharedModule } from './_shared/shared.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MAT_DATE_LOCALE,
} from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppComponent } from './app.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FixedpluginModule } from './shared/fixedplugin/fixedplugin.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

import { AppRoutes } from './app.routing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { AuthModule } from './_modules/auth/auth.module';
import { AuthInterceptor } from './_modules/auth/services/auth-interceptor.service';
import { SatDatepickerModule, SatNativeDateModule, MAT_DATE_LOCALE as MAT_DATE_LOCALE_SATURN } from 'saturn-datepicker';
import { NgxSpinnerModule } from "ngx-spinner";
import * as moment from 'moment';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  imports: []
})
export class MaterialModule { }

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true
    }),

    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedpluginModule,
    SatDatepickerModule,
    SatNativeDateModule,
    NgxSpinnerModule,
    // InMemoryWebApiModule.forRoot(InMemoryApisService)
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthGuard,
    ErrorInterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_LOCALE_SATURN, useValue: 'pt-BR' },
    // InMemoryApisService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AppModule {
  constructor() {
    this.overrideDate();
  }


  overrideDate() {
    Date.prototype.toJSON = function(key) {
      // let year = this.getUTCFullYear();
      // let month = this.getUTCMonth() + 1;
      // let day = this.getUTCDate();
      // let hour = this.getUTCHours();
      // let minute = this.getUTCMinutes();
      // let second = this.getUTCSeconds();
      // let milisecond = this.getUTCMilliseconds();

      this[key] = moment(this).format('YYYY-MM-DD[T]HH:mm:ss.sss');
    
      console.log(this[key])

      return this[key];

      return this[key];
      
      // return moment(this).format(year + "-"  + '0' + month + "-"+ day +"T" + hour + ":"+ minute + ":" + second + "." + milisecond);
      return moment(this).format();
    }
  }
}

