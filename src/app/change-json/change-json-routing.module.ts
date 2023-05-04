import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeJSONComponent } from './change-json.component';

const routes: Routes = [
  {
    path: '',
    component: ChangeJSONComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeJSONRoutingModule { }
