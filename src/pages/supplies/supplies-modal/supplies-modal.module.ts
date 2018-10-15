import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuppliesModalPage } from './supplies-modal';

@NgModule({
    declarations: [
        SuppliesModalPage,
    ],
    imports: [
        IonicPageModule.forChild(SuppliesModalPage),
    ],
    exports: [
        SuppliesModalPage,
    ]
})
export class SuppliesModalPageModule {}