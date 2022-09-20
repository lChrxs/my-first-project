import { Component } from '@angular/core';
import { CharacterHp } from './models/character-hp.model';
import { CHARACTER } from './models/character.model';
import { Player } from './models/player.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-project';

  constructor(){
    this.argumentDesctruturing();
  }

  basicTypes(){
    const VIDEO_GAME: string = 'Super Smash Bros. Ultimate';
    console.log(VIDEO_GAME);

    let characterName: string = 'Waluigi';
    console.log(characterName);

    let hp: number = 100;
    console.log(hp);

    let status: boolean;
    status = (hp <= 0) ? false : true;
    console.log(status);

    const STATUS: string = `Game: ${VIDEO_GAME}
    character: ${characterName}
    hp: ${hp}
    status: ${status}`;

    console.log(STATUS);
  }

  arraysAndObjects(){
    console.log('arraysAndObjects')

    let SKILLS: string[] = ['punch', 'kick', 'damage', 'speacial mov'];
    console.log(SKILLS)

    const character: CHARACTER = {
      name:         'Waluigi',
      healthPoints: 100,
      live:         true,
      skills:       SKILLS
    }

    character.name = 'Mario';
    character.color = 'red';

    console.log(character);

  }

  ifStatement(){
    
    let x: number = 20, y: number = 100;

    if(x > y){
      console.log('x es mayor a y');
      
    }else if(x < y){
      console.log('x es menor a y');

    }else if(x == y){
      console.log('x es igual a y');
    
    }else{
      console.log('ninguna se cumple');
    }

  }

  switchStatement(){
    let a: number = 20, b: number = 15;

    switch (a-b) {
      case 0:
        console.log('Result: 0');
        break;
      case 5:
        console.log('Result: 5');
        break;
      case 10:
        console.log('Result: 10');
        break;
    
      default:
        console.log('Result: NaN')
        break;
    }

  }

  whileStatement(){

    let counter: number = 0;
    while (counter <= 5) {
      console.log('Ejecucion numero: ' + counter);
      counter ++;
    }


    let i: number = 0;
    do {
      console.log('do Ejecucion numero: ' + i);
      i++;
    }while(i <= 5)
  }

  forStatement(){
    let array: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90];

    for(const INDEX in array){
      console.log(INDEX);
      console.log(array[INDEX]);
    }

    console.log('================================');
    
    for(let i: number = 0; i < array.length; i++){
      console.log(i);
      console.log(array[i]);
    }
    
    console.log('================================');
    
    array.forEach(value => {
      console.log(value)
    })
    
    array.forEach(function (value, index) {
      console.log(value)
      console.log(index)
    })


  }

  tryCatchStatement(){

    try{
      console.log('hola');
      throw "Se presento un error";
    }catch(e){
      console.log(e)
    }
  }

  basicFunctions(){
    function sumNumbers(a: number, b: number): number {
      return a+b;
    }
    console.log(sumNumbers(2, 5));

    const ARROW_NUM = (a: number, b: number): number => {return a+b;}
    console.log(ARROW_NUM(1,8));

    function multiplyNumbers(a: number, b: number, c?: number): number {
      return a*b* (c ?? 1); // Los ?? sirven para condicional, si c no esta definido o no tiene valor, que tome el valor de 1
    }
    console.log(multiplyNumbers(2, 2));
    console.log(multiplyNumbers(2, 2, 3));

    const RESULT: number = multiplyNumbers(2, 2);
    console.log(RESULT);

    function printNumber(a: number): void{
      console.log(a)
    }
    printNumber(8)

  }



  healCharacter(character: CharacterHp){
    character.healthPoints = 100;
  }

  otherFunctions(){
    let character: CharacterHp = {
      name:         'Mario',
      live:         true,
      healthPoints: 50,
      skills:       ['punch', 'kick', 'damage', 'special mov'],
      color:        'Rojo',
      showHp(){
        console.log('Puntos de vida: ' + character.healthPoints);
      }       
    };
    
    character.showHp();
    this.healCharacter(character);
    character.showHp();
  }

  basicDestructuring(){
    const CURRENT_SONG: Player = {
      volume: 90,
      second: 36,
      name: 'La Cucaracha',
      detail: {
        author: 'Fernan Caballero',
        year: 1818
      }
    }

    let author: string = 'Juan Gomez';

    const { volume, second, name : SONG_NAME, detail } = CURRENT_SONG;
    const { author : DETAIL_SONG } = detail;

    console.log('El volumen es de: ', volume);
    console.log('El segundo actual es: ', second);
    console.log('La canción es: ', SONG_NAME);
    console.log('El autor es: ', DETAIL_SONG);
  }

  arrayDestructuring(){
    const AVENGERS : string[] = ['Capitán América', 'Iron Man', 'Viuda Negra', 'Thor', 'Hulk'];
    const [ , , , p3, ] = AVENGERS;
    const [ , c2, c3, , c4] = AVENGERS;
    const [ a1 ] = AVENGERS;

    console.log('El primer avenger es: ' + a1);
    console.log('El segundo avenger es: ' + c2);
    console.log('El tercer avenger es: ' + c3);
    console.log('El cuarto avenger es: ' + p3);
    console.log('El quinto avenger es: ' + c4);
  }

  argumentDesctruturing(){
    const phone: Product = {
      description: 'Iphone 14 Pro Max',
      price: 59999
    }

    const tablet: Product = {
      description: 'Galaxy Tab S8 Ultra',
      price: 24999
    }

    function calcTaxes(products: Product[]): [number, number] {
      let total = 0;

      products.forEach(product => {
        total += product.price
      })

      return [total, total * 1.16];
    }

    const CAR_ITEMS: Product[] = [phone, tablet];
    console.table(CAR_ITEMS);
    
    const [cartPrice, carTaxes] = calcTaxes(CAR_ITEMS);
    console.log(cartPrice);
    console.log(carTaxes);
  }

}
