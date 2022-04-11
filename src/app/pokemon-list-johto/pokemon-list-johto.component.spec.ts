import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListJohtoComponent } from './pokemon-list-johto.component';

describe('PokemonListJohtoComponent', () => {
  let component: PokemonListJohtoComponent;
  let fixture: ComponentFixture<PokemonListJohtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonListJohtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListJohtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
