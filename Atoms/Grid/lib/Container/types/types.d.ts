import { HTMLAttributes } from "react";
export interface IWrapper {
    row?: string;
    col?: string;
    autoRow?: string;
    autoCol?: string;
    gap?: string;
    gridAutoFlow?: string;
    area?: string;
    direction?: 'column' | 'row' | 'row-reverse' | 'column-reverse';
    justifyContent?: AlignHorizon;
    align?: AlignVertically;
    basis?: string;
    grow?: string;
    shrink?: string;
    flex?: string;
    order?: string;
    position?: string;
    wrap?: string;
}
/**
 *  Типы display css
 */
export declare type Display = 'block' | 'inline' | 'inline-block' | 'inline-grid' | 'flex' | 'grid';
/**
 * Выравнивание flex елементов по горизонтали
 */
export declare type AlignHorizon = 'start' | 'end' | 'center' | 'between' | 'around';
/**
 * Выравнивание flex елементов по вертикали
 */
export declare type AlignVertically = 'start' | 'end' | 'center' | 'stretch' | 'baseline';
/**
 *
 * Типы для `Container` сетки
 */
export interface IContainer extends HTMLAttributes<HTMLDivElement>, IWrapper {
    as?: 'div' | 'section' | 'header' | 'footer' | 'article' | 'address';
    display?: Display;
}
