import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuppliesCreatePageAdmin } from './supplies-ad-create';

@NgModule({
    declarations: [
        SuppliesCreatePageAdmin,
    ],
    imports: [
        IonicPageModule.forChild(SuppliesCreatePageAdmin),
    ],
    exports: [
        SuppliesCreatePageAdmin,
    ]
})
export class SuppliesCreatePageAdminModule {}