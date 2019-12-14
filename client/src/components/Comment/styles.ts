import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../style/theme';
import Textarea from '../../basics/Textarea';
import Button from '../../basics/Button';

export const CommentContainer = styled.div`
    width: auto;
    min-height: 5rem;
    /* border: 1px solid ${theme.BORDER_GRAY}; */
    border-radius: .5rem;
    padding: 0;
    border: none;
    /* border: 1px solid ${theme.BORDER_GRAY}; */
    /* border-top-left-radius: .5rem;
    border-top-right-radius: .5rem; */
`;

export const CommentInputWrapper = styled.div`
    border: 1px solid ${theme.BORDER_GRAY};
    border-radius: .5rem;
`;

export const CommentHeader = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: .5rem;
    background: white;
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
    /* background: ${theme.CHI_CONG}; */
`;

export const CommentInput = styled(Textarea)`
    display: inline-block;
    width: -webkit-fill-available; 
    height: 5rem;
    border:none;
    padding: .5rem;
    /* background: ${theme.CRA_YELLOW}; */
`;

export const CommentFooter = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    /* background: ${theme.EXODUS_FRUIT}; */
    align-items: center;
    margin-top: -.3rem;
`;

export const SubmitButton = styled(Button)`
    flex: none;
    margin-left: auto;
    border-radius:0;
    height: 3rem;
    width: 5rem;
    background: ${theme.CRA_MINT_FIRST};
    border-bottom-right-radius: .5rem;
`;

export const Mention = styled.span`
    flex: none;
    margin-right: 1rem;
`;

export const Comment = styled.div`
    width: 100%;
    height: fit-content;
    /* background: ${theme.FIRST_DATA}; */
    margin: 0.5rem auto;
`;

export const CommentOwner = styled.div`
    /* background: ${theme.ROBINS_EGG_BLUE}; */
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

export const SLink = styled(Link)`
    text-decoration:none;
    color: black;
`;

export const WeakText = styled.span`
    color:${theme.WEAK_TEXT};
`;

export const Hr = styled.hr`
    border: .03rem ${theme.BORDER_GRAY} solid;
    margin: 2rem 0;
`;
