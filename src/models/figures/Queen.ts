import {Figure, Names} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackFigure from "../../assets/black_queen.png";
import whiteFigure from "../../assets/white_queen.png";

export class Queen extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color,cell);
        this.icon = color === Colors.BLACK ? blackFigure : whiteFigure;
        this.name = Names.queen;
    }
    canMove(target: Cell): boolean {
        if( !super.canMove(target)) {
            return false
        }
        if( this.cell.isEmptyVertical(target)) {
            return true
        }
        if( this.cell.isEmptyHorizontal(target)) {
            return true
        }
        if( this.cell.isEmptyDiagonal(target)) {
            return true
        }
        return false

    }
}