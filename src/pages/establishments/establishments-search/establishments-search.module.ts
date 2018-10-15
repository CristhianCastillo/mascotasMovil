import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstablishmentsSearchPage } from './establishments-search';

@NgModule({
    declarations: [
        EstablishmentsSearchPage,
    ],
    imports: [
        IonicPageModule.forChild(EstablishmentsSearchPage),
    ],
    exports: [
        EstablishmentsSearchPage,
    ]
})
export class EstablishmentsSearchPageModule {}