import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PetCreatePage } from './pet-create';

@NgModule({
    declarations: [
        PetCreatePage,
    ],
    imports: [
        IonicPageModule.forChild(PetCreatePage),
    ],
    exports: [
        PetCreatePage,
    ]
})
export class PetCreateModule {}