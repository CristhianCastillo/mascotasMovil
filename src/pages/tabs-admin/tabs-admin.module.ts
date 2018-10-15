import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsAdminPage } from './tabs-admin';

@NgModule({
    declarations: [
        TabsAdminPage,
    ],
    imports: [
        IonicPageModule.forChild(TabsAdminPage),
    ],
    exports: [
        TabsAdminPage
    ]
})
export class TabsAdminPageModule {}