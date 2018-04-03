import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  private emojis = [
    'assets/imgs/emoji/beam.png', 
    'assets/imgs/emoji/blush.png', 
    'assets/imgs/emoji/grin-big.png',
    'assets/imgs/emoji/grin-smile.png',
    'assets/imgs/emoji/grin-squint.png',
    'assets/imgs/emoji/grin-sweat.png',
    'assets/imgs/emoji/grin.png',
    'assets/imgs/emoji/wink.png'
  ]; 
    
  private foods = [
    'assets/imgs/food/cherry.png', 
    'assets/imgs/food/green-apple.png', 
    'assets/imgs/food/kiwi.png',
    'assets/imgs/food/peach.png',
    'assets/imgs/food/pear.png',
    'assets/imgs/food/strawberry.png'
  ]; 

  constructor(public navCtrl: NavController) {

  }

  toggleEmoji(emoji:any) {  

    var randomEmoji = this.emojis[Math.floor(Math.random() * this.emojis.length)];
    emoji.src = randomEmoji;
      
  }

  toggleFood(food:any) {  

    var randomFood = this.foods[Math.floor(Math.random() * this.foods.length)];
    food.src = randomFood;
      
  }

}
