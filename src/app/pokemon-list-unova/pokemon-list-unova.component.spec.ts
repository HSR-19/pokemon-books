import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListUnovaComponent } from './pokemon-list-unova.component';

describe('PokemonListUnovaComponent', () => {
  let component: PokemonListUnovaComponent;
  let fixture: ComponentFixture<PokemonListUnovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonListUnovaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListUnovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
