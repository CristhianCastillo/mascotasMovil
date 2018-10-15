import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstablishmentsSavedModalPage } from './establishments-saved-modal';

@NgModule({
    declarations: [
        EstablishmentsSavedModalPage,
    ],
    imports: [
        IonicPageModule.forChild(EstablishmentsSavedModalPage),
    ],
    exports: [
        EstablishmentsSavedModalPage,
    ]
})
export class EstablishmentsSavedModalPageModule {}