import styled from 'styled-components';
import { theme } from '../../style/theme';
import Textarea from '../../basics/Textarea';
import Button from '../../basics/Button';

export const CommentContainer = styled.div`
    width: auto;
    /* max-height: fit-content; */
    min-height: 5rem;
    border: 1px solid black;
    padding: 1rem;
    background: ${theme.CITY_LIGHT};
`;

export const CommentHeader = styled.div`
    width: 100%;
    background: ${theme.CHI_CONG};
`;

export const CommentInput = styled(Textarea)`
    display: inline-block;
    width: -webkit-fill-available; 
    height: 5rem;
    background: ${theme.CRA_YELLOW};
`;

export const CommentFooter = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    background: ${theme.EXODUS_FRUIT};
    align-items: center;
`;

export const SubmitButton = styled(Button)`
    flex: none;
    margin-left: auto;
    border-radius:0;
    height: 3rem;
    width: 5rem;
`;

export const Mention = styled.span`
    flex: none;
    margin-right: 1rem;
`;

export const Comment = styled.div`
    width: 100%;
    height: fit-content;
    background: ${theme.FIRST_DATA};
    margin: 0.5rem auto;
`;

export const CommentOwner = styled.div`
    background: ${theme.ROBINS_EGG_BLUE};
`;

export const CommentContent = styled.div`
    padding: 1rem;
`;

export const CommentTimestamp = styled.span`
    display: block;
    font-size: 0.8rem;
    margin-left: 1rem;
`;

export const Right = styled.div`
    display: flex;
    justify-content: flex-end;
`;
