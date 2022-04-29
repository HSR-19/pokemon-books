import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListAlolaComponent } from './pokemon-list-alola.component';

describe('PokemonListAlolaComponent', () => {
  let component: PokemonListAlolaComponent;
  let fixture: ComponentFixture<PokemonListAlolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonListAlolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListAlolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
