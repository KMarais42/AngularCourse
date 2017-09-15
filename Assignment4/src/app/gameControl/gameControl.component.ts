import { Component , OnInit , Output , EventEmitter } from '@angular/core';

@Component ( {
    selector: 'app-gameControl',
    templateUrl: './odd.component.html' ,
    styleUrls: ['./gameControl.component.css']
  }
)

export class GameControlComponent implements OnInit {
  ngOnInit(){};
  @Output() gameTicker = new EventEmitter<{gameCounter:number,gameStarted:boolean,gameStatus:string}>();
  constructor(){this.gameCounter=0};
  gameCounter: number=0;
  gameStarted: boolean=false;
  gameStatus:string='In progress';
  counterId;
  emitCounterValue(obj){
    console.log('Tick'+obj.gameCounter);
    obj.gameCounter++;
    obj.gameTicker.emit({gameCounter:this.gameCounter,gameStarted:this.gameStarted,gameStatus:this.gameStatus});
  }
  onClickStart(){
    console.log('Game started');
    this.counterId = setInterval(()=>{this.emitCounterValue(this);},1000);
    console.log(this.counterId);
  };
  onClickEnd(){
    clearInterval(this.counterId);
    console.log('Game ended')
  }

}
