import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { DungeonComponent } from './dungeon/dungeon.component';
import { TablesComponent } from './tables/tables.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgxLoadingModule } from 'ngx-loading';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryService } from './services/in-memory.service';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Import the new dependencies

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    DungeonComponent,
    TablesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryService),
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    HttpClient,
    provideHttpClient(withFetch()), // Add the withFetch() to enable fetch API for HttpClient
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
