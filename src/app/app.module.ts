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
import { PokemonListSinnohComponent } from './pokemon-list-sinnoh/pokemon-list-sinnoh.component';
import { PokemonListUnovaComponent } from './pokemon-list-unova/pokemon-list-unova.component';
import { PokemonListKalosComponent } from './pokemon-list-kalos/pokemon-list-kalos.component';
import { PokemonListAlolaComponent } from './pokemon-list-alola/pokemon-list-alola.component';
import { PokemonListGalarComponent } from './pokemon-list-galar/pokemon-list-galar.component';


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
    PokemonListGalarComponent
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
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
