import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';
import * as core from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    (core as any).provideBrowserGlobalErrorListeners?.() || [], // Conditional for Angular v19
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),
    provideAuth0({
      domain: "dev-luxlocations.us.auth0.com",
      clientId: "OOm4rGznLVehZLHtOJzRMaxJ4Faxajnp",
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
  },)],
};
