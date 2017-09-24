class TicTacToe {
    constructor() {
        this.matrix=[[null, null, null], [null, null, null], [null, null, null]];
        this.currentSymbol="x";
        this.winner=null;
        this.turn=0;
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.getFieldValue(rowIndex, columnIndex)==null) {
           if (this.isFinished()==false)
              this.matrix[rowIndex][columnIndex]=this.getCurrentPlayerSymbol();
           var k="";
           for (var i=0; i<3; i++) {
               for (var j=0; j<3; j++) {
                   k=k+this.matrix[i][j];
               }
               if (k=="xxx" || k=="ooo") {
                     this.winner=this.currentSymbol;
               }
               k="";
           }  
            
           if ((this.matrix[0][0]+this.matrix[1][1]+this.matrix[2][2])=="xxx" || (this.matrix[0][0]+this.matrix[1][1]+this.matrix[2][2])=="ooo" || (this.matrix[0][2]+this.matrix[1][1]+this.matrix[2][0])=="ooo" || (this.matrix[0][2]+this.matrix[1][1]+this.matrix[2][0])=="xxx")
                {
                 this.winner=this.currentSymbol;   
           } 
           
           for (var j=0; j<3; j++) {
               for (var i=0; i<3; i++) {
                   k=k+this.matrix[i][j];
               }
               if (k=="xxx" || k=="ooo") {
                     this.winner=this.currentSymbol;
               }
               k="";
           }    

           this.turn=this.turn+1;
           if (this.getCurrentPlayerSymbol()=="x") this.currentSymbol="o";
           else this.currentSymbol="x";
     }
    }

    isFinished() {
           if (this.getWinner()!=null || this.noMoreTurns()==true || this.isDraw==true)
                return true;
           else return false;
    }

    getWinner() {
          return this.winner; 
    }

    noMoreTurns() {
        var k=0;
        for (var i=0; i<3; i++) 
          for (var j=0; j<3; j++) 
              if (this.matrix[i][j]!=null) k=k+1;
        if (k==9) return true;
        else return false;
    }

    isDraw() {
        if (this.getWinner()!=null || this.noMoreTurns()==false) return false;
        if (this.noMoreTurns()==true && this.getWinner()==null) return true;
    }

    getFieldValue(rowIndex, colIndex) {
         return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
