import { Component, OnInit } from '@angular/core';
import { POKEMONS_KALOS } from '../models/pokemons-kalos'; // pokemons-kalos.tsでexportしていたPOKEMONS_KALOSをimport

@Component({
  selector: 'pokemon-list-kalos',
  templateUrl: './pokemon-list-kalos.component.html', // htmlファイルを指定。
  styleUrls: ['./pokemon-list-kalos.component.scss'] // scssファイルをlist形式で指定。（scssは複数作成できるため？）
})
export class PokemonListKalosComponent implements OnInit {

  pokemons = POKEMONS_KALOS; // POKEMONS_KALOSをpokemonsに格納。pokemon-list-kalos.component.htmlで使えるようにするため。

  constructor() { }

  ngOnInit(): void {
  }

}
