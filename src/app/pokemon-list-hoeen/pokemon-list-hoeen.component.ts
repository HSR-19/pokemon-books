import { Component, OnInit } from '@angular/core';
import { POKEMONS_HOEEN } from '../models/pokemons-hoeen'; // pokemons-hoeen.tsでexportしていたPOKEMONS_HOEENをimport

@Component({
  selector: 'pokemon-list-hoeen',
  templateUrl: './pokemon-list-hoeen.component.html', // htmlファイルを指定。
  styleUrls: ['./pokemon-list-hoeen.component.scss'] // scssファイルをlist形式で指定。（scssは複数作成できるため？）
})
export class PokemonListHoeenComponent implements OnInit {

  pokemons = POKEMONS_HOEEN; // POKEMONS_HOEENをpokemonsに格納。pokemon-list-hoeen.component.htmlで使えるようにするため。

  constructor() { }

  ngOnInit(): void {
  }

}
