import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListGalarComponent } from './pokemon-list-galar.component';

describe('PokemonListGalarComponent', () => {
  let component: PokemonListGalarComponent;
  let fixture: ComponentFixture<PokemonListGalarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonListGalarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListGalarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
