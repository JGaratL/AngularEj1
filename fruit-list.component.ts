import { Component } from '@angular/core';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.scss']
})
export class FruitListComponent {
  fruit: string = "";
  fruitList: string[] = [];

  addFruit() {
    this.fruitList.push(this.fruit);
    this.fruit = "";
    console.log(this.fruitList);



  };
 
   delFruit(posicion: number) {

      this.fruitList.splice(posicion,1);
      
    };  
  }

