import {
  ApplicationRef,
  ComponentFactoryResolver,
  Injectable,
  Injector,
} from '@angular/core';
import { AlertComponent, AlertType } from './component/alert/alert.component';

export interface AlertData {
  title: string;
  message?: string;
  type?: AlertType;
}

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(
    private appRef: ApplicationRef,
    private injector: Injector,
    private cfr: ComponentFactoryResolver
  ) {}

  show(data: AlertData) {
    const factory = this.cfr.resolveComponentFactory(AlertComponent);
    const componentRef = factory.create(this.injector);

    componentRef.instance.message = data.message;
    componentRef.instance.title = data.title;
    componentRef.instance.type = data.type ?? undefined;

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as any).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    // Auto destroy after 3 seconds
    setTimeout(() => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    }, 5000);
  }
}
