import { Wrapper } from "Container/components";
import styled from "styled-components";

/**
 * Стандартно описааные стили для контейнера 
 */
export const StyledContainer = styled(Wrapper)`
    display: ${({ display = 'grid' }) => display};
    
    grid-template-columns: ${({ col = '' }) => col };
    grid-template-rows: ${({ row = '' }) => row };

    grid-auto-rows: ${({ autoRow }) => (autoRow ? 'minmax(auto, max-content)' : 'auto')};
    grid-auto-columns: ${({ autoCol }) => (autoCol ? 'minmax(auto, max-content)' : 'auto')};

    grid-row-gap: ${({ gap = '' }) => gap.split(' ')[0]};
    grid-column-gap: ${({ gap = '' }) => (gap.split(' ').length === 1 ? gap : gap.split(' ')[1])};

    flex-direction: ${({ direction = '' }) => direction};

    flex-wrap: ${({ wrap = '' }) => wrap};

    justify-content: ${({justifyContent = ''}) => justifyContent} ;

    align-items: ${({ align = '', display }) => ((display === 'flex' && align === 'start' || align === 'end') ? `flex-${align}` : align)};

    order: ${({order = ''}) => order};

    position: ${({ position = 'relative' }) => position};
    
`;