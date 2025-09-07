import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Alert } from './app/core/services/alert-service/Alert';
import { enableProdMode } from '@angular/core';

//ENVIRONMENT SETTINGS LATER, UNTIL THEN UNCOMMENT IF CODE IS ON PRODUCTION ENVIRONMENT
// enableProdMode();

bootstrapApplication(App, appConfig)
  .then((appRef) => {
    Alert.init(appRef.injector);
  })
  .catch((err) => console.error(err));
