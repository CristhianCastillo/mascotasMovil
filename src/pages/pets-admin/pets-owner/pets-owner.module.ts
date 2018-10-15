import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PetsOwnerPage } from './pets-owner';

@NgModule({
    declarations: [
        PetsOwnerPage,
    ],
    imports: [
        IonicPageModule.forChild(PetsOwnerPage),
    ],
    exports: [
        PetsOwnerPage,
    ]
})
export class PetsOwnerPageModule {}