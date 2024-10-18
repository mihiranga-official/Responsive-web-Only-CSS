import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyC75_BPXqJid3oMrL8uw6Zrcj0MoQ62U9A",
  authDomain: "pos-system-b2816.firebaseapp.com",
  projectId: "pos-system-b2816",
  storageBucket: "pos-system-b2816.appspot.com",
  messagingSenderId: "270909553814",
  appId: "1:270909553814:web:fbdbaa549c3ae8c53216b7",
  measurementId: "G-DLP5KYYSH7"
};

// Main application configuration using ApplicationConfig
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Sets up the router
    provideClientHydration(), // Enables client hydration for SSR
    provideHttpClient(withFetch()), // Sets up HTTP client with fetch API

    // Directly add Firebase and Firestore providers without importProvidersFrom
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ]
};
