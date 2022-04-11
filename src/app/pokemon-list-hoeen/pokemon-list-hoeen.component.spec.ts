import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListHoeenComponent } from './pokemon-list-hoeen.component';

describe('PokemonListHoeenComponent', () => {
  let component: PokemonListHoeenComponent;
  let fixture: ComponentFixture<PokemonListHoeenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonListHoeenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListHoeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
