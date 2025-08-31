import { Injector } from '@angular/core';
import { AlertData, AlertService } from './alert.service';

export class Alert {
  static injector: Injector;

  static init(injector: Injector) {
    console.log('[Alert] Initialized with injector');
    Alert.injector = injector;
  }

  static fire(data: AlertData) {
    if (!Alert.injector) {
      throw new Error('[Alert] Injector is not initialized!');
    }
    const service = Alert.injector.get(AlertService);
    service.show(data);
  }
}
