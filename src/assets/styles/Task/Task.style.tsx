import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const WrapperContainerList = styled.div`
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: 16rem 16rem 16rem 16rem;

    &::after {
        content: '';
        clear: both;
        display: table;
    }
`;

export const WrapperList = styled.div<{span: number}>`
    width: 100%;
    float: left;

    @media only screen and (min-width: 768px) {
        width: ${(props) => (props.span ? (props.span / 12) * 100 : '8.33')}%;
    }
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
