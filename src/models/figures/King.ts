import {Figure, Names} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";

import blackFigure from "../../assets/black_king.png"
import whiteFigure from "../../assets/white_king.png"

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color,cell);
        this.icon = color === Colors.BLACK ? blackFigure : whiteFigure;
        this.name = Names.king;
    }
    canMove(target: Cell): boolean {
        if(!super.canMove(target)) {
            return false
        }
        const dx = Math.abs(this.cell.x - target.x)
        const dy = Math.abs(this.cell.y - target.y)
        return (dx+ dy > 0 && dx<= 1 && dy <= 1)
    }
}