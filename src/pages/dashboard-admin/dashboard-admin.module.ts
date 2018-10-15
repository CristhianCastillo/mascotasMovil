import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardAdminPage } from './dashboard-admin';

@NgModule({
    declarations: [
        DashboardAdminPage,
    ],
    imports: [
        IonicPageModule.forChild(DashboardAdminPage),
    ],
    exports: [
        DashboardAdminPage,
    ]
})
export class DashboardAdminPageModule {}