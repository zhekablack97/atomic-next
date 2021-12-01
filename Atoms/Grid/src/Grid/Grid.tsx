import React, { HTMLAttributes } from "react"
import './Grid.module.css';

interface IGrid extends HTMLAttributes<HTMLDivElement>{}

const Grid: React.FC<IGrid> = ({children}) => {
    return (
        <div className="wrapper">
            {children}
        </div>
    )
}

export default Grid;