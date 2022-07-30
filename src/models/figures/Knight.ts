import {Figure, Names} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackFigure from "../../assets/black_knight.png";
import whiteFigure from "../../assets/white_knight.png";

export class Knight extends Figure{
    constructor(color: Colors, cell: Cell) {
        super(color,cell);
        this.icon = color === Colors.BLACK ? blackFigure : whiteFigure;
        this.name = Names.knight;
    }
    canMove(target: Cell): boolean {
        if( !super.canMove(target)) {
            return false
        }
        const dx = Math.abs(this.cell.x - target.x)
        const dy = Math.abs(this.cell.y - target.y)
        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)
    }
}