import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../models/pokemons'; // pokemons-hoeen.tsでexportしていたPOKEMONS_HOEENをimport

@Component({
  selector: 'pokemon-list-hoeen',
  templateUrl: './pokemon-list-hoeen.component.html', // htmlファイルを指定。
  styleUrls: ['./pokemon-list-hoeen.component.scss'] // scssファイルをlist形式で指定。（scssは複数作成できるため？）
})
export class PokemonListHoeenComponent implements OnInit {

  pokemons = POKEMONS.hoeen; // POKEMONS_HOEENをpokemonsに格納。pokemon-list-hoeen.component.htmlで使えるようにするため。

  constructor() { }

  ngOnInit(): void {
  }

}
