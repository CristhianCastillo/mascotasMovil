import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuppliesCreatePage } from './supplies-create';

@NgModule({
    declarations: [
        SuppliesCreatePage,
    ],
    imports: [
        IonicPageModule.forChild(SuppliesCreatePage),
    ],
    exports: [
        SuppliesCreatePage,
    ]
})
export class SuppliesCreatePageModule {}