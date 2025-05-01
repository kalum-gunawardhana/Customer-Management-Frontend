import { Routes } from '@angular/router';
import { ViewCusComponent } from './component/view-cus/view-cus.component';
import { TabBarComponent } from './component/tab-bar/tab-bar.component';
import { AddCusComponent } from './component/add-cus/add-cus.component';
import { UpdateCusComponent } from './component/update-cus/update-cus.component';
import { SearchCusComponent } from './component/search-cus/search-cus.component';

export const routes: Routes = [
    // {path:'', component:TabBarComponent},
    {path:'view-cus', component:ViewCusComponent},
    {path:'add-cus', component:AddCusComponent},
    {path:'update-cus', component:UpdateCusComponent},
    {path:'search-cus', component:SearchCusComponent}
];
