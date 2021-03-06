import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../models/pokemons'; // pokemons-alola.tsでexportしていたPOKEMONS_ALOLAをimport

@Component({
  selector: 'pokemon-list-alola',
  templateUrl: './pokemon-list-alola.component.html', // htmlファイルを指定。
  styleUrls: ['./pokemon-list-alola.component.scss'] // scssファイルをlist形式で指定。（scssは複数作成できるため？）
})
export class PokemonListAlolaComponent implements OnInit {

  pokemons = POKEMONS.alola; // POKEMONS_JOHTOをpokemonsに格納。pokemon-list-alola.component.htmlで使えるようにするため。

  constructor() { }

  ngOnInit(): void {
  }

}
