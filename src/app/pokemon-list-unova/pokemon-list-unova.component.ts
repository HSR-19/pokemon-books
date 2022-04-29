import { Component, OnInit } from '@angular/core';
import { POKEMONS_UNOVA } from '../models/pokemons-unova'; // pokemons-unova.tsでexportしていたPOKEMONS_UNOVAをimport

@Component({
  selector: 'pokemon-list-unova',
  templateUrl: './pokemon-list-unova.component.html', // htmlファイルを指定。
  styleUrls: ['./pokemon-list-unova.component.scss'] // scssファイルをlist形式で指定。（scssは複数作成できるため？）
})
export class PokemonListUnovaComponent implements OnInit {

  pokemons = POKEMONS_UNOVA; // POKEMONS_UNOVAをpokemonsに格納。pokemon-list-unova.component.htmlで使えるようにするため。

  constructor() { }

  ngOnInit(): void {
  }

}
