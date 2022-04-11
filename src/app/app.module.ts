import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonListJohtoComponent } from './pokemon-list-johto/pokemon-list-johto.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import { PokemonListHoeenComponent } from './pokemon-list-hoeen/pokemon-list-hoeen.component';
import { SelectPokemonComponent } from './select-pokemon/select-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonListJohtoComponent,
    PokemonDetailComponent,
    PokemonListHoeenComponent,
    SelectPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
