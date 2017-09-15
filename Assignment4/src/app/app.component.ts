import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenTicks: number [] = [];
  oddTicks: number [] = [];
  isOdd: boolean;

  onGameTickerTick( evt : { gameCounter:number,gameStarted:boolean,gameStatus:string }
  ){
    var res: number = evt.gameCounter % 2 ;

    console.log("Gamecounter="+evt.gameCounter);
    console.log("gameStarted"+evt.gameStarted);
    console.log("gameStatus"+evt.gameStatus);
    this.isOdd = (res ) === 0;
    if (this.isOdd )
    {
      this.evenTicks.push(evt.gameCounter);
    }
    else
    {
      this.oddTicks.push(evt.gameCounter);
    }
  }

}
