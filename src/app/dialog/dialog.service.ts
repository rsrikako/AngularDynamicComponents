import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, ComponentRef, EmbeddedViewRef, Type } from '@angular/core';
import { DialogModule } from './dialog.module';
import { DialogComponent } from '../components/dialog/dialog.component';
import { CustomConfig } from './custom.config';
import { CustomInjector } from './custom.injector';

@Injectable({
  providedIn: DialogModule
})
export class DialogService {

  dialogComponentRef: ComponentRef<DialogComponent>

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  appendDialogComponentToBody(config){
    const map = new WeakMap();
    map.set(CustomConfig,config);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
    const componentRef = componentFactory.create(new CustomInjector(this.injector,map));
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    this.dialogComponentRef = componentRef;
  }

  private removeDialogComponentFromBody() {
    this.appRef.detachView(this.dialogComponentRef.hostView);
    this.dialogComponentRef.destroy();
  }

  public open (componentType,config:CustomConfig) {
    this.appendDialogComponentToBody(config);
    this.dialogComponentRef.instance.childComponentType = componentType;
  }

  // public open (componentType:Type<any>, config:DIalogConfig){

  // }
}
