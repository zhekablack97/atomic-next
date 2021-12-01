import React, { HTMLAttributes } from "react";
import './Grid.module.css';
interface IGrid extends HTMLAttributes<HTMLDivElement> {
}
declare const Grid: React.FC<IGrid>;
export default Grid;
