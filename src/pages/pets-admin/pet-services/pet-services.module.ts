import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PetServicesPage } from './pet-services';

@NgModule({
    declarations: [
        PetServicesPage,
    ],
    imports: [
        IonicPageModule.forChild(PetServicesPage),
    ],
    exports: [
        PetServicesPage,
    ]
})
export class PetServicesPageModule {}