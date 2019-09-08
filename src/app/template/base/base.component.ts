import { Component, OnInit, ComponentFactoryResolver, Type, ViewChild, ComponentRef, AfterViewInit, ChangeDetectorRef, ViewContainerRef, Injector } from '@angular/core';
import { InsertionDirective } from 'src/app/dialog/insertion.directive';
import { DivComponent } from '../div/div.component';
import { ExampleComponent } from 'src/app/example/example.component';
import { CustomConfig } from 'src/app/dialog/custom.config';
import { CustomInjector } from 'src/app/dialog/custom.injector';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements AfterViewInit {

  componentRef:ComponentRef<any>;
  childComponentsType:Type<any>[];

  @ViewChild('123',{read: ViewContainerRef,static:true})
  viewContainerRef;

  constructor(
      private componentFactoryResolver:ComponentFactoryResolver,
      private cd:ChangeDetectorRef,
      private injector:Injector ) { }

  ngAfterViewInit(){
    const map = new WeakMap();
    let config = {
        data:{
          message:'I am an idiot'
        }
      }
    map.set(CustomConfig,config);
    this.childComponentsType = [DivComponent,DivComponent,ExampleComponent];
    this.loadChildComponent(this.childComponentsType,map);
    this.cd.detectChanges();
  }

  loadChildComponent(componentsType: Type<any>[],map) {
    //start
    //to come dynamically
    

    //end
    let componentFactories = [];
    componentsType.forEach( componentType => {
      componentFactories.push(this.componentFactoryResolver.resolveComponentFactory(componentType));
    });
    this.viewContainerRef.clear();
    componentFactories.forEach(component => {
      component.create(new CustomInjector(this.injector,map));
      this.componentRef = this.viewContainerRef.createComponent(component);
      
    });
      
   
  }

}
