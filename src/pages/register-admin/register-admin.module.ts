import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterAdminPage } from './register-admin';

@NgModule({
    declarations: [
        RegisterAdminPage,
    ],
    imports: [
        IonicPageModule.forChild(RegisterAdminPage),
    ],
    exports: [
        RegisterAdminPage
    ]
})
export class RegisterAdminPageModule {}