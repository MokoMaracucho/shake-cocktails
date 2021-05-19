import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktails-list-no-alcohol',
  templateUrl: './cocktails-list-no-alcohol.component.html',
  styleUrls: ['./cocktails-list-no-alcohol.component.css']
})
export class CocktailsListNoAlcoholComponent implements OnInit {

  public title = 'Alcohol-free cocktail list';

  public cocktails_alcohol_free: any[] = [
    {
      id: 1,
      name: 'Bora Bora',
      description: 'Deze kant -en klare, alcoholvrije cocktail is…',
      imgUrl: 'assets/img/Shake-cocktail-Bora-Bora-0-300x599.png'
    },
    {
      id: 2,
      name: 'Bora Bora',
      description: 'Deze kant -en klare, alcoholvrije cocktail is…',
      imgUrl: 'assets/img/Shake-cocktail-Bora-Bora-0-300x599.png'
    },
    {
      id: 3,
      name: 'Bora Bora',
      description: 'Deze kant -en klare, alcoholvrije cocktail is…',
      imgUrl: 'assets/img/Shake-cocktail-Bora-Bora-0-300x599.png'
    },
    {
      id: 4,
      name: 'Bora Bora',
      description: 'Deze kant -en klare, alcoholvrije cocktail is…',
      imgUrl: 'assets/img/Shake-cocktail-Bora-Bora-0-300x599.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
