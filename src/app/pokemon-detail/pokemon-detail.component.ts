import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { POKEMONS } from '../models/pokemons';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemons = POKEMONS;
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
