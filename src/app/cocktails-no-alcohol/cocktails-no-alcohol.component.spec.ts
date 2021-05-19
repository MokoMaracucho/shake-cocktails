import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsNoAlcoholComponent } from './cocktails-no-alcohol.component';

describe('CocktailsNoAlcoholComponent', () => {
  let component: CocktailsNoAlcoholComponent;
  let fixture: ComponentFixture<CocktailsNoAlcoholComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailsNoAlcoholComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailsNoAlcoholComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
