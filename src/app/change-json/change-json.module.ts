import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeJSONRoutingModule } from './change-json-routing.module';
import { ChangeJSONComponent } from './change-json.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ChangeJSONComponent],
  imports: [
    CommonModule,
    ChangeJSONRoutingModule,
    FormsModule,
    IonicModule
  ]
})
export class ChangeJSONModule { }
