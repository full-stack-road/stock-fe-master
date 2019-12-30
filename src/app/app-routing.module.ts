import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './common/sign-in/sign-in.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AddCompanyComponent } from './admin/add-company/add-company.component';
import { UpdateCompanyComponent } from './admin/update-company/update-company.component';
import { AddStockExchangeComponent } from './admin/add-stock-exchange/add-stock-exchange.component';
import { UserComponent } from './user/user/user.component';
import { CompareDetailsComponent } from './user/compare-details/compare-details.component';
import { SignUpComponent } from './common/sign-up/sign-up.component';
import { UploadComponent } from './admin/upload/upload.component';
import { IpoListComponent } from './admin/ipo-list/ipo-list.component';
import { UpdateIpoComponent } from './admin/update-ipo/update-ipo.component';
import { AddIpoComponent } from './admin/add-ipo/add-ipo.component';
import { ManageIpoComponent } from './user/manage-ipo/manage-ipo.component';
import { DetailsComponent } from './user/details/details.component';
import { ListCompanyComponent } from './admin/list-company/list-company.component';
import { ListStockExchangeComponent } from './admin/list-stock-exchange/list-stock-exchange.component';
import { UpdateDetailsComponent } from './user/update-details/update-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: '', component: UploadComponent },
      { path: 'upload', component: UploadComponent },
      { path: 'add-company', component: AddCompanyComponent },
      { path: 'list-company', component: ListCompanyComponent },
      { path: 'update-company', component: UpdateCompanyComponent },
      { path: 'add-stock-exchange', component: AddStockExchangeComponent },
      { path: 'list-stock-exchange', component: ListStockExchangeComponent },
      { path: 'list-ipo', component: IpoListComponent },
      { path: 'update-ipo', component: UpdateIpoComponent },
      { path: 'add-ipo', component: AddIpoComponent }
    ]
  },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: '', component: DetailsComponent },
      { path: 'details', component: DetailsComponent},
      { path: 'update-details', component: UpdateDetailsComponent},
      { path: 'manage-ipo', component: ManageIpoComponent},
      { path: 'compare-details', component: CompareDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
