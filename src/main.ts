import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app.component';
import config from 'devextreme/core/config';
import { licenseKey } from './devextreme-license';

config({ licenseKey });

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
