import { Component, OnInit } from '@angular/core';
import { POKEMONS_GALAR } from '../models/pokemons-galar'; // pokemons-galar.tsでexportしていたPOKEMONS_GALARをimport

@Component({
  selector: 'pokemon-list-galar',
  templateUrl: './pokemon-list-galar.component.html', // htmlファイルを指定。
  styleUrls: ['./pokemon-list-galar.component.scss'] // scssファイルをlist形式で指定。（scssは複数作成できるため？）
})
export class PokemonListGalarComponent implements OnInit {

  pokemons = POKEMONS_GALAR; // POKEMONS_GALARをpokemonsに格納。pokemon-list-galar.component.htmlで使えるようにするため。

  constructor() { }

  ngOnInit(): void {
  }

}