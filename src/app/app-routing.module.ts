import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tab', loadChildren: './tab/tab.module#TabPageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'selectlogin', loadChildren: './selectlogin/selectlogin.module#SelectloginPageModule' },
  { path: 'addform', loadChildren: './addform/addform.module#AddformPageModule' },
  { path: 'editcategory', loadChildren: './editcategory/editcategory.module#EditcategoryPageModule' },
  { path: 'viewapprove', loadChildren: './viewapprove/viewapprove.module#ViewapprovePageModule' },
  { path: 'viewreject', loadChildren: './viewreject/viewreject.module#ViewrejectPageModule' },
  { path: 'tab5', loadChildren: './tab5/tab5.module#Tab5PageModule' },
  { path: 'employeepage', loadChildren: './employeepage/employeepage.module#EmployeepagePageModule' },
  { path: 'managerpage', loadChildren: './managerpage/managerpage.module#ManagerpagePageModule' },
  { path: 'hrpage', loadChildren: './hrpage/hrpage.module#HrpagePageModule' },
  { path: 'adminpage', loadChildren: './adminpage/adminpage.module#AdminpagePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
