import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChoosePetPage } from './choose-pet';

@NgModule({
    declarations: [
        ChoosePetPage,
    ],
    imports: [
        IonicPageModule.forChild(ChoosePetPage),
    ],
    exports: [
        ChoosePetPage,
    ]
})
export class ChoosePetPageModule {}