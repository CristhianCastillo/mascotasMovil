import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstablishmentsPage } from './establishments';

@NgModule({
    declarations: [
        EstablishmentsPage,
    ],
    imports: [
        IonicPageModule.forChild(EstablishmentsPage),
    ],
    exports: [
        EstablishmentsPage,
    ]
})
export class EstablishmentsPageModule {}