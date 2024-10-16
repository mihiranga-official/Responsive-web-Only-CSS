import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: 
  [provideRouter(routes),
   provideClientHydration(),
   provideHttpClient(withFetch()),
   provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
   provideFirestore(() => getFirestore())
   
  ]
};
