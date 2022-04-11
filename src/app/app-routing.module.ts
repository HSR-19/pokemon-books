import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonListJohtoComponent } from './pokemon-list-johto/pokemon-list-johto.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PokemonListComponent
  },
  {
    path: 'kanto',
    pathMatch: 'full',
    component: PokemonListComponent
  },
  {
    path: 'johto',
    pathMatch: 'full',
    component: PokemonListJohtoComponent
  },
  {
    path: ':id',
    pathMatch: 'full',
    component: PokemonDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
