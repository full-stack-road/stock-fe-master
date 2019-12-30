import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
// import { fakeBackendProvider } from './helpers/fake-backend';
// import { JwtInterceptor } from './helpers/jwt.interceptor';
// import { ErrorInterceptor } from './helpers/error.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AddCompanyComponent } from './admin/add-company/add-company.component';
import { UpdateCompanyComponent } from './admin/update-company/update-company.component';
import { AddStockExchangeComponent } from './admin/add-stock-exchange/add-stock-exchange.component';
import { SignInComponent } from './common/sign-in/sign-in.component';
import { HeaderComponent } from './common/header/header.component';
import { UserHeaderComponent } from './common/user-header/user-header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SignUpComponent } from './common/sign-up/sign-up.component';
import { UserComponent } from './user/user/user.component';
import { CompareDetailsComponent } from './user/compare-details/compare-details.component';
import { CompareChartsComponent } from './user/compare-charts/compare-charts.component';
import { UploadComponent } from './admin/upload/upload.component';
import { DetailsComponent } from './user/details/details.component';
import { UpdateIpoComponent } from './admin/update-ipo/update-ipo.component';
import { AddIpoComponent } from './admin/add-ipo/add-ipo.component';
import { ManageIpoComponent } from './user/manage-ipo/manage-ipo.component';
import { ListCompanyComponent } from './admin/list-company/list-company.component';
import { UpdateDetailsComponent } from './user/update-details/update-details.component';
import { IpoListComponent } from './admin/ipo-list/ipo-list.component';
import { IdentityValueDirective } from './directives/identity-value.directive';
import { NgxEchartsModule } from 'ngx-echarts';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListStockExchangeComponent } from './admin/list-stock-exchange/list-stock-exchange.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddCompanyComponent,
    UpdateCompanyComponent,
    AddStockExchangeComponent,
    SignInComponent,
    HeaderComponent,
    UserHeaderComponent,
    FooterComponent,
    SignUpComponent,
    UserComponent,
    CompareDetailsComponent,
    CompareChartsComponent,
    UploadComponent,
    DetailsComponent,
    UpdateIpoComponent,
    AddIpoComponent,
    ManageIpoComponent,
    ListCompanyComponent,
    ListStockExchangeComponent,
    UpdateDetailsComponent,
    IpoListComponent,
    IdentityValueDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxEchartsModule,
    BsDropdownModule.forRoot(),
    TimepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent],
  exports: [IdentityValueDirective]
})
export class AppModule { }
