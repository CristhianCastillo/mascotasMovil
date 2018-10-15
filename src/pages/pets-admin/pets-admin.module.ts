import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PetsAdminPage } from './pets-admin';

@NgModule({
    declarations: [
        PetsAdminPage,
    ],
    imports: [
        IonicPageModule.forChild(PetsAdminPage),
    ],
    exports: [
        PetsAdminPage,
    ]
})
export class PetsAdminPageModule {}