import { RouterModule, Routes } from '@angular/router';
import { ViewCusComponent } from './component/view-cus/view-cus.component';
import { TabBarComponent } from './component/tab-bar/tab-bar.component';
import { AddCusComponent } from './component/add-cus/add-cus.component';
import { UpdateCusComponent } from './component/update-cus/update-cus.component';
import { SearchCusComponent } from './component/search-cus/search-cus.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '', component: TabBarComponent, children: [
            { path: 'add-cus', component: AddCusComponent },
            { path: 'search-cus', component: SearchCusComponent },
            { path: 'update-cus', component: UpdateCusComponent },
            { path: 'view-cus', component: ViewCusComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }