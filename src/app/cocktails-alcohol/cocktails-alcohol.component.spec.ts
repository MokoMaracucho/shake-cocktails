import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsAlcoholComponent } from './cocktails-alcohol.component';

describe('CocktailsAlcoholComponent', () => {
  let component: CocktailsAlcoholComponent;
  let fixture: ComponentFixture<CocktailsAlcoholComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailsAlcoholComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailsAlcoholComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
