import styled from 'styled-components';
import { url } from 'inspector';
import H3 from '../../basics/H3';
import H4 from '../../basics/H4';
import { theme } from '../../style/theme';
import Textarea from '../../basics/Textarea';
import Button from '../../basics/Button';
import Span from '../../basics/Span';

export const Container = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    padding: 1rem;
`;

export const Title = styled(H3)`
    font-size: 2rem;
    margin-right: auto;
`;

export const Strong = styled(Span)`
    font-weight: ${theme.WEIGHT.STRONG};
    color: black;
`;

export const HeaderMeta = styled(Span)`
    font-size: 1rem;
    font-weight: ${theme.WEIGHT.MEDIUM};
    margin: 1rem 0;
    color: ${theme.AMERICAN_RIVER};
`;

export const Creator = styled(H4)`
    margin-right: auto;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    /* img{
        width: auto;
        max-width: 70%;
        height: auto;
        margin: 1rem auto;
    } */
    a{
        color: black;
        .MuiSvgIcon-root{
            font-size: 3rem;
        }
    }
`;

export const CopyRight = styled.div`
    margin: 5rem 0;
    color: ${theme.AMERICAN_RIVER};
`;

export const CommentContainer = styled.div`
    width: auto;
    min-height: 5rem;
    border: 1px solid black;
    padding: 1rem;
`;

export const CommentHeader = styled.div`
    width: 100%;
`;

export const CommentInput = styled(Textarea)`
    display: inline-block;
    width: -webkit-fill-available; 
    height: 5rem;
`;

export const CommentFooter = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
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

interface ImageContentProp {
    src: string;
}

export const ImageContent = styled.image<ImageContentProp>`
    width: 45rem;
    height: 30rem;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: ${(props) => `url(${props.src})`};
    background-position: center center;
    margin-top: 1rem;
`;
