import {
  bootstrapApplication,
  BootstrapContext,
} from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

// const bootstrap = () => bootstrapApplication(App, config);

export default (contetxt: BootstrapContext) => {
  return bootstrapApplication(App, config, contetxt);
};
