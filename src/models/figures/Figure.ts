import {Colors} from "../Colors";
import {Cell} from "../Cell";
import icon from '../../assets/icon.png'

export enum Names {
    figire = "",
    king = 'Король',
    queen = "Ферзь",
    knight= 'Конь',
    pawn = "Пешка",
    rook= 'Ладья',
    bishop = "Слон",
}

export class Figure {
    color: Colors;
    icon: typeof icon | null;
    cell: Cell;
    name: Names;
    id: number;

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.icon = null
        this.name = Names.figire
        this.id = Math.random()
    }

    canMove(target: Cell):boolean {
        if(target.figure?.color === this.color){
            return false
        }
        if (target.figure?.name === Names.king) {
            return false
        }
        return true
    }
    moveFigure(target: Cell) {

    }
}