import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Alert } from './app/core/services/alert-service/Alert';

bootstrapApplication(App, appConfig)
  .then((appRef) => {
    Alert.init(appRef.injector);
  })
  .catch((err) => console.error(err));
