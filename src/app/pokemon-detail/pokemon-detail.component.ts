import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { POKEMONS } from '../models/pokemons'; // pokemons.tsでexportしていたPOKEMONSをimport

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  tmp = POKEMONS.kanto
  pokemons = this.tmp.concat(POKEMONS.johto, POKEMONS.hoeen, POKEMONS.sinnoh, POKEMONS.unova, POKEMONS.kalos, POKEMONS.alola); // POKEMONSをpokemonsに格納。このpokemon-detail.component.tsやpokemon-detail.component.htmlで使えるようにするため。
  pokemon!: {
    id: number;
    name: string;
    type: string[];
    base: {
      HP: number;
      Attack: number;
      Defense: number;
      Sp_Attack: number;
      Sp_Defense: number;
      Speed: number;
    };
    thumbnail: string;
  };

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(map => {
      const id = map.get('id');
      this.pokemon = this.pokemons[Number(id) - 1];
    })
  }

}
