import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectPokemonComponent } from './select-pokemon/select-pokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonListJohtoComponent } from './pokemon-list-johto/pokemon-list-johto.component';
import { PokemonListHoeenComponent } from './pokemon-list-hoeen/pokemon-list-hoeen.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import { AngularFireStorageModule } from '@angular/fire/storage';
import { PokemonListSinnohComponent } from './pokemon-list-sinnoh/pokemon-list-sinnoh.component';
import { PokemonListUnovaComponent } from './pokemon-list-unova/pokemon-list-unova.component';
import { PokemonListKalosComponent } from './pokemon-list-kalos/pokemon-list-kalos.component';
import { PokemonListAlolaComponent } from './pokemon-list-alola/pokemon-list-alola.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { FormsModule }   from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonListJohtoComponent,
    PokemonDetailComponent,
    PokemonListHoeenComponent,
    SelectPokemonComponent,
    PokemonListSinnohComponent,
    PokemonListUnovaComponent,
    PokemonListKalosComponent,
    PokemonListAlolaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatAutocompleteModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    // AngularFireStorageModule
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
