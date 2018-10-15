import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstablishmentAdminPage } from './establishment-admin';

@NgModule({
    declarations: [
        EstablishmentAdminPage,
    ],
    imports: [
        IonicPageModule.forChild(EstablishmentAdminPage),
    ],
    exports: [
        EstablishmentAdminPage,
    ]
})
export class EstablishmentAdminPageModule {}