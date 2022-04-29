import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../models/pokemons'; // pokemons-johto.tsでexportしていたPOKEMONS_JOHTOをimport

@Component({
  selector: 'pokemon-list-johto',
  templateUrl: './pokemon-list-johto.component.html', // htmlファイルを指定。
  styleUrls: ['./pokemon-list-johto.component.scss'] // scssファイルをlist形式で指定。（scssは複数作成できるため？）
})
export class PokemonListJohtoComponent implements OnInit {

  pokemons = POKEMONS.johto; // POKEMONS_JOHTOをpokemonsに格納。pokemon-list-johto.component.htmlで使えるようにするため。

  constructor() { }

  ngOnInit(): void {
  }

}
