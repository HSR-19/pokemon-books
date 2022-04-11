import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectPokemonComponent } from './select-pokemon/select-pokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonListJohtoComponent } from './pokemon-list-johto/pokemon-list-johto.component';
import { PokemonListHoeenComponent } from './pokemon-list-hoeen/pokemon-list-hoeen.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SelectPokemonComponent
  },
  {
    path: 'kanto',
    component: PokemonListComponent
  },
  {
    path: 'johto',
    component: PokemonListJohtoComponent
  },
  {
    path: 'hoeen',
    component: PokemonListHoeenComponent
  },
  {
    path: ':id',
    component: PokemonDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
