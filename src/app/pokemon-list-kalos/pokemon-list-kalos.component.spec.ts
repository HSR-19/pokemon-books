import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListKalosComponent } from './pokemon-list-kalos.component';

describe('PokemonListKalosComponent', () => {
  let component: PokemonListKalosComponent;
  let fixture: ComponentFixture<PokemonListKalosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonListKalosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListKalosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
