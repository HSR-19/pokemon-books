import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { POKEMONS_KANTO } from '../models/pokemons-kanto'; // pokemons.tsでexportしていたPOKEMONSをimport

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemons = POKEMONS_KANTO; // POKEMONS_KANTOをpokemonsに格納。このpokemon-detail.component.tsやpokemon-detail.component.htmlで使えるようにするため。
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
