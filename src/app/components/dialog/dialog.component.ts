import { Component, OnDestroy, AfterViewInit, ComponentRef, Type, ViewChild, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { InsertionDirective } from 'src/app/dialog/insertion.directive';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements AfterViewInit, OnDestroy {

  componentRef:ComponentRef<any>;
  childComponentType: Type<any>;

  @ViewChild(InsertionDirective,{read:null,static:false})
  insertionPoint:InsertionDirective

  constructor(
    private componentFactoryResolver:ComponentFactoryResolver,
    private cd:ChangeDetectorRef ) { }

  ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  onOverlayClicked(evt: MouseEvent) {
    // close the dialog
  }

  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation()
  }

  loadChildComponent(componentType: Type<any>) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    let viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
