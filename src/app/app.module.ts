import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootComponent } from './components/root/root.component';
import { InputComponent } from './components/input/input.component';
import { ExampleComponent } from './example/example.component';
import { DialogModule } from './dialog/dialog.module';
import { BaseComponent } from './template/base/base.component';
import { DivComponent } from './template/div/div.component';
import { CustomConfig } from './dialog/custom.config';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    InputComponent,
    ExampleComponent,
    BaseComponent,
    DivComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule
  ],
  providers: [CustomConfig],
  bootstrap: [AppComponent],
  entryComponents:[
    ExampleComponent,
    DivComponent
  ]
})
export class AppModule { }
