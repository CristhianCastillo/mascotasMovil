import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendaCreatePage } from './agenda-create';

@NgModule({
    declarations: [
        AgendaCreatePage,
    ],
    imports: [
        IonicPageModule.forChild(AgendaCreatePage),
    ],
    exports: [
        AgendaCreatePage,
    ]
})
export class AgendaCreatePageModule {}