import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListSinnohComponent } from './pokemon-list-sinnoh.component';

describe('PokemonListSinnohComponent', () => {
  let component: PokemonListSinnohComponent;
  let fixture: ComponentFixture<PokemonListSinnohComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonListSinnohComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListSinnohComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
