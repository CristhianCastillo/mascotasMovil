import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuppliesPage } from './supplies';

@NgModule({
    declarations: [
        SuppliesPage,
    ],
    imports: [
        IonicPageModule.forChild(SuppliesPage),
    ],
    exports: [
        SuppliesPage,
    ]
})
export class SuppliesPageModule {}