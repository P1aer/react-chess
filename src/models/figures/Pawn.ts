import {Figure, Names} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackFigure from "../../assets/black_pawn.png";
import whiteFigure from "../../assets/white_pawn.png";

export class Pawn extends Figure {
    isFirstStep: boolean = true

    constructor(color: Colors, cell: Cell) {
        super(color,cell);
        this.icon = color === Colors.BLACK ? blackFigure : whiteFigure;
        this.name = Names.pawn;
    }
    canMove(target: Cell): boolean {
        if( !super.canMove(target)) {
            return false
        }
        const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1
        const FSdirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2

        //ход
        if((target.y === this.cell.y + direction
            || this.isFirstStep &&(target.y === this.cell.y + FSdirection))
            && target.x === this.cell.x
            && this.cell.board.getCell(target.x,target.y).isEmpty()) {
            return true
        }
        // кушать
        if(target.y === this.cell.y + direction && (target.x ===this.cell.x +1 || target.x === this.cell.x - 1)
           && this.cell.isEnemy(target)) {
            return true
        }

        return false
    }
    moveFigure(target: Cell) {
        super.moveFigure(target);
        this.isFirstStep = false
    }
}