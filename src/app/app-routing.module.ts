import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './components/root/root.component';
import { BaseComponent } from './template/base/base.component';


const routes: Routes = [
  { path:'root', component:RootComponent },
  { path:'template', component:BaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
