import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../models/pokemons'; // pokemons.tsでexportしていたPOKEMONSをimport

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html', // htmlファイルを指定。
  styleUrls: ['./pokemon-list.component.scss'] // scssファイルをlist形式で指定。（scssは複数作成できるため？）
})
export class PokemonListComponent implements OnInit {

  pokemons = POKEMONS; // POKEMONSをpokemonsに格納。pokemon-list.component.htmlで使えるようにするため。

  constructor() { }

  ngOnInit(): void {
  }

}
