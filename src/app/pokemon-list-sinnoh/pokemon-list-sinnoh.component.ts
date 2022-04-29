import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../models/pokemons'; // pokemons-sinnoh.tsでexportしていたPOKEMONS_SINNOHをimport

@Component({
  selector: 'pokemon-list-sinnoh',
  templateUrl: './pokemon-list-sinnoh.component.html', // htmlファイルを指定。
  styleUrls: ['./pokemon-list-sinnoh.component.scss'] // scssファイルをlist形式で指定。（scssは複数作成できるため？）
})
export class PokemonListSinnohComponent implements OnInit {

  pokemons = POKEMONS.sinnoh; // POKEMONS_SINNOHをpokemonsに格納。pokemon-list-sinnoh.component.htmlで使えるようにするため。

  constructor() { }

  ngOnInit(): void {
  }

}
