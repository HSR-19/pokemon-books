import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../models/pokemons'; // pokemons-kanto.tsでexportしていたPOKEMONS_KANTOをimport

@Component({
  selector: 'pokemon-list-kanto',
  templateUrl: './pokemon-list.component.html', // htmlファイルを指定。
  styleUrls: ['./pokemon-list.component.scss'] // scssファイルをlist形式で指定。（scssは複数作成できるため？）
})
export class PokemonListComponent implements OnInit {

  pokemons = POKEMONS.kanto; // POKEMONS_KANTOをpokemonsに格納。pokemon-list.component.htmlで使えるようにするため。

  constructor() { }

  ngOnInit(): void {
  }

}
