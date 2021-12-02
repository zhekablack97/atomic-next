import React, { HTMLAttributes } from "react"
import styles from './Grid.module.css';

interface IGrid extends HTMLAttributes<HTMLDivElement>{}

const Grid: React.FC<IGrid> = ({children}) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

export default Grid;