import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { POKEMONS } from './models/pokemons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ポケモン図鑑';
  control = new FormControl();
  tmp = POKEMONS.kanto
  pokemons = this.tmp.concat(POKEMONS.johto, POKEMONS.hoeen, POKEMONS.sinnoh, POKEMONS.unova, POKEMONS.kalos, POKEMONS.alola);
  pokemon_name: string[] = this.pokemons.map((obj) => obj.name);
  filteredPokemonName: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredPokemonName = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.pokemon_name.filter(pokemon_name => this._normalizeValue(pokemon_name).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  constructor(private router: Router) {

  }
  read_pokemon_name(value: string) {
    var pokemon_obj = this.pokemons.find((v: { name: string; }) => v.name == value); //フォームに入力されたポケモンの名前からブロックを検索
    var pokemon_id = pokemon_obj?.id
    this.router.navigateByUrl(`/${pokemon_id}`)
  }
}