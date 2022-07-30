import React, {FC} from 'react';
import {Figure} from "../models/figures/Figure";

interface LostProps {
    title: string
    figures: Figure[]
}

const LostFigure:FC<LostProps> = ({title, figures}) => {
    return (
        <div className="lost">
            <h3>{title}</h3>
            <div className="figures">
                {
                    figures.map(fig =>
                        <div className="elem" key={fig.id}>
                            {
                                fig.icon && <img src={fig.icon} alt=""/>
                            }
                            {
                                fig.name
                            }
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default LostFigure;