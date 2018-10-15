import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuppliesAdminPage } from './supplies-ad';

@NgModule({
    declarations: [
        SuppliesAdminPage,
    ],
    imports: [
        IonicPageModule.forChild(SuppliesAdminPage),
    ],
    exports: [
        SuppliesAdminPage,
    ]
})
export class SuppliesAdminPageModule {}