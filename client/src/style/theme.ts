import baseStyled, {ThemedStyledInterface} from 'styled-components';
export const theme={
    background: '#ffffff',
    sourLemon : '#ffeaa7',
    green: '#5FCD8B',
}

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
