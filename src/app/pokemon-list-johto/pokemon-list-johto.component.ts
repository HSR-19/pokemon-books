import { Component, OnInit } from '@angular/core';
import { POKEMONS_JOHTO } from '../models/pokemons-johto'; // pokemons-jhoto.tsでexportしていたPOKEMONSをimport

@Component({
  selector: 'pokemon-list-johto',
  templateUrl: './pokemon-list-johto.component.html', // htmlファイルを指定。
  styleUrls: ['./pokemon-list-johto.component.scss'] // scssファイルをlist形式で指定。（scssは複数作成できるため？）
})
export class PokemonListJohtoComponent implements OnInit {

  pokemons = POKEMONS_JOHTO; // POKEMONS_KANTOをpokemonsに格納。pokemon-list-johto.component.htmlで使えるようにするため。

  constructor() { }

  ngOnInit(): void {
  }

}
