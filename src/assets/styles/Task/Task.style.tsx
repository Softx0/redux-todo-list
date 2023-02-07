import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const WrapperContainerList = styled.div`
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: 16rem 16rem 16rem 16rem;
`;

export const WrapperList = styled.div`
    /* aspect-ratio: 1.5; */
    /* object-fit: contain; */
    width: 100%;
    height: 100%;
`;

export const Button = styled.button`
    padding: 0.5em 1em;
    border: 2px;
    background: #5247d0;
    color: white;
    border-radius: 5px;
`;

export const ButtonLink = styled(Link)`
    padding: 0.5em 1em;
    border: 2px;
    background: #5247d0;
    color: white;
    border-radius: 5px;
`;

export const Wrapper = styled.header`
    background: #19181c;
    margin: 0em 0em 4em 0em;
`;

export const Title = styled.h2`
    color: ${(props) => props.color};
    text-align: center;
`;

export const SubTitle = styled.h3`
    color: ${(props) => props.color};
`;

export const Paragraph = styled.p`
    color: ${(props) => props.color};
`;
