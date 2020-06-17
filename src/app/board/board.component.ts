import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {


  squares : any[]
  xisNext : boolean;
  winner : string ;
  draw : boolean;

  constructor() { }

  ngOnInit(): void {
    this.newgame();
  }

  newgame(){
    this.squares  = Array(9).fill(null);
    this.xisNext  = true;
    this.winner  = null;
    this.draw = false;
  }

  get player(){
    return this.xisNext ? 'X' : 'O'
  }

  makemove(index : number){
    if(!this.squares[index]){
      this.squares.splice(index, 1, this.player)
      this.xisNext = !this.xisNext;
    }
    this.winner = this.calculateResult() 
  }

  calculateResult(){

    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for( let i = 0; i< lines.length; i++){
      
      const [ a, b, c] = lines[i]
      if(
        this.squares[a] && 
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      )
      return this.squares[a];
    }
    return null

  }

}


