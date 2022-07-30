import React, {FC} from 'react';
import {Cell} from "../models/Cell";

interface cellProps {
    cell: Cell,
    selected: boolean
    click: (cell:Cell) => void
}

const CellComponent:FC<cellProps> = ({cell,selected,click}) => {
    return (
        <div onClick={() => click(cell)}
             className={["cell",cell.color, selected ? "selected" : ""].join(" ")}
             style={{background: cell.available && cell.figure ? "red" : ""}}
        >
            {cell.available && !cell.figure && <div className="available"/>      }
            {cell.figure?.icon && <img src={cell.figure.icon} alt=""/>}
        </div>
    );
};

export default CellComponent;