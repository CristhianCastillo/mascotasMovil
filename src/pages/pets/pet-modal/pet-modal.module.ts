import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PetModalPage } from './pet-modal';

@NgModule({
    declarations: [
        PetModalPage,
    ],
    imports: [
        IonicPageModule.forChild(PetModalPage),
    ],
    exports: [
        PetModalPage,
    ]
})
export class PetModalPageModule {}