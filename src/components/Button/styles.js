import styled from "styled-components";

export const Btn = styled.button`
    background-color: ${props =>props.backgroundColor};
    color: ${props=> props.color};
    border-color: ${props=>props.borderColor};
    border: ${props=>props.border};
    border-width: ${props=>props.borderWidth};
    font-family: Arial, Helvetica, sans-serif;
    font-weight: normal;
    font-weight: bold;
`