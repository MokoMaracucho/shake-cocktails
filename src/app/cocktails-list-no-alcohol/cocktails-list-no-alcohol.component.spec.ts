import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsListNoAlcoholComponent } from './cocktails-list-no-alcohol.component';

describe('CocktailsListNoAlcoholComponent', () => {
  let component: CocktailsListNoAlcoholComponent;
  let fixture: ComponentFixture<CocktailsListNoAlcoholComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailsListNoAlcoholComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailsListNoAlcoholComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
