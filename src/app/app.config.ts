import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

export const appConfig: ApplicationConfig = {
  providers: [
    // Routing configuration
    provideRouter(routes),

    // Provide HttpClient for making HTTP requests
    importProvidersFrom(HttpClientModule),

    // Provide HttpClientInMemoryWebApiModule for in-memory data mocking
    importProvidersFrom([
      HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false }
      )
    ]),
  ]
};
