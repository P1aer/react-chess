import {Figure, Names} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";

import blackFigure from "../../assets/black_bishop.png"
import whiteFigure from "../../assets/white_bishop.png"

export class Bishop extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color,cell);
        this.icon = color === Colors.BLACK ? blackFigure : whiteFigure;
        this.name = Names.bishop;
    }
    canMove(target: Cell): boolean {
       if( !super.canMove(target)) {
           return false
       }
        if( this.cell.isEmptyDiagonal(target)) {
            return true
        }
        return false
    }
}