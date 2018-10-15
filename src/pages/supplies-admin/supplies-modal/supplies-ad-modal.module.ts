import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuppliesModalPageAdmin } from './supplies-ad-modal';

@NgModule({
    declarations: [
        SuppliesModalPageAdmin,
    ],
    imports: [
        IonicPageModule.forChild(SuppliesModalPageAdmin),
    ],
    exports: [
        SuppliesModalPageAdmin,
    ]
})
export class SuppliesModalPageAdminModule {}