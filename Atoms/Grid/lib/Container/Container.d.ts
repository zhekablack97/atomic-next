import React from "react";
import { IContainer } from "./types/types";
/**
 * Компонент `Container` служит для обертки компонента и выстравивания общей сетки
 *
 * @param as:'div' | 'section' | 'header' | 'footer' | 'article' | 'address' - служит для определение ноды, по умолчанию `div`.
 * @param display:'block' | 'inline' | 'inline-block' | 'inline-grid' | 'flex' | 'grid' - определяет тип контейнера, по умолчанию `grid`.
 *
 * для упрвление положения внутри контейнера такие свойства как `align-self` или `grid-column-start` прописываються самостоятельно
 */
declare const Container: React.FC<IContainer>;
export default Container;
