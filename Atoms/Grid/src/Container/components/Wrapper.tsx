import { IContainer } from "Container/types/types";
import React from "react"

/**
 * Обертка для работы с сеткой 
 * 
 */
export const Wrapper: React.FC<IContainer> = ({ as = 'div', children, ...props }) => {

    const WrapperNode = as;
    return (
        <WrapperNode {...props}>
            {children}
        </WrapperNode>
    )
}
